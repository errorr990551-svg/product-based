const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

async function checkRemoteExists(domain, relPath) {
  return new Promise((resolve) => {
    const url = `${domain}/${relPath.replace(/\\/g, '/')}`;
    const req = https.request(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'GitHub-Actions-Deploy-Packager' },
      timeout: 3000
    }, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
    req.end();
  });
}

async function main() {
  console.log("----------------------------------------------------------------");
  console.log("📦 Smart Deployment Packager for Hostinger");
  console.log("----------------------------------------------------------------");

  const buildDir = path.resolve(process.cwd(), 'frontend', 'build');
  const stagingDir = path.resolve(process.cwd(), 'staging');
  const deploySecret = process.env.DEPLOY_SECRET || require('crypto').randomBytes(16).toString('hex');
  const zipName = process.env.ZIP_NAME || `deploy_${deploySecret}.zip`;
  const domain = (process.env.SITE_DOMAIN || 'https://iotaflow.com').replace(/\/+$/, '');

  if (!fs.existsSync(buildDir)) {
    console.error(`❌ Build directory not found: ${buildDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(stagingDir)) {
    fs.mkdirSync(stagingDir, { recursive: true });
  }

  console.log(`🔍 Scanning build artifacts in: ${buildDir}`);
  console.log(`🌐 Target Domain for asset cache check: ${domain}`);

  // Recursively collect all files in build
  function walk(dir) {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(walk(fullPath));
      } else {
        results.push(fullPath);
      }
    }
    return results;
  }

  const allFiles = walk(buildDir);
  console.log(`📊 Found ${allFiles.length} total files in build.`);

  const filesToPackage = [];
  const mediaToCheck = [];

  for (const fullPath of allFiles) {
    const relPath = path.relative(buildDir, fullPath).replace(/\\/g, '/');

    // 1. Never package source map files
    if (relPath.endsWith('.map')) {
      continue;
    }

    // 2. Documents: skip by default unless changed in recent commit
    if (relPath.startsWith('documents/')) {
      continue; // Static catalogues (155 MB) already live on server
    }

    // 3. Videos: skip unless changed in recent commit
    if (relPath.endsWith('.mp4')) {
      continue; // 18 MB video already live on server
    }

    // 4. Large GIFs (e.g. 9MB gifgif): skip if already on server
    if (relPath.endsWith('.gif')) {
      continue;
    }

    // 5. Always include critical application assets:
    // HTML, JS, CSS, JSON, XML, TXT, fonts, SVGs, root icons, .htaccess
    const ext = path.extname(relPath).toLowerCase();
    const isRootFile = !relPath.includes('/');
    const isCodeOrMarkup = ['.html', '.php', '.js', '.css', '.json', '.xml', '.txt', '.ico'].includes(ext);
    const isFont = ['.woff', '.woff2', '.ttf', '.eot'].includes(ext);
    const isSvg = ext === '.svg';
    const isSpecial = relPath === '.htaccess' || relPath === '_redirects';

    if (isRootFile || isCodeOrMarkup || isFont || isSvg || isSpecial) {
      filesToPackage.push({ fullPath, relPath });
      continue;
    }

    // 6. Media images in static/media (e.g. .webp, .png, .jpg)
    if (relPath.startsWith('static/media/')) {
      mediaToCheck.push({ fullPath, relPath });
      continue;
    }

    // Fallback: include other files
    filesToPackage.push({ fullPath, relPath });
  }

  console.log(`⚡ Checking ${mediaToCheck.length} media files against server cache...`);
  const missingMedia = [];
  const cachedMedia = [];

  // Check in batches of 15
  for (let i = 0; i < mediaToCheck.length; i += 15) {
    const batch = mediaToCheck.slice(i, i + 15);
    const results = await Promise.all(batch.map(async (item) => {
      const exists = await checkRemoteExists(domain, item.relPath);
      return { item, exists };
    }));

    for (const r of results) {
      if (r.exists) {
        cachedMedia.push(r.item);
      } else {
        missingMedia.push(r.item);
        filesToPackage.push(r.item);
      }
    }
  }

  console.log(`✅ Cached on server (skipped): ${cachedMedia.length} files`);
  console.log(`🆕 Missing / New on server (included): ${missingMedia.length} files`);
  if (missingMedia.length > 0) {
    missingMedia.forEach(m => console.log(`   + ${m.relPath}`));
  }

  console.log(`📦 Packaging ${filesToPackage.length} files into ${zipName}...`);

  // Write file list for zip creation
  const fileListPath = path.join(stagingDir, 'package_files.txt');
  fs.writeFileSync(
    fileListPath,
    filesToPackage.map(f => f.relPath).join('\n'),
    'utf8'
  );

  const outputZipPath = path.join(stagingDir, zipName);

  // Use Python or native zip to create clean zip across Windows & Linux with maximum compression
  let zipped = false;

  // Try Python 3 or Python
  for (const pyCmd of ['python3', 'python']) {
    try {
      const pyScript = `
import zipfile, os

build_dir = r"${buildDir.replace(/\\/g, '\\\\')}"
output_zip = r"${outputZipPath.replace(/\\/g, '\\\\')}"
file_list_path = r"${fileListPath.replace(/\\/g, '\\\\')}"

with open(file_list_path, 'r', encoding='utf-8') as f:
    files = [line.strip() for line in f if line.strip()]

with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
    for rel_path in files:
        full_path = os.path.join(build_dir, rel_path)
        if os.path.exists(full_path):
            zf.write(full_path, rel_path)
`;
      const scriptPath = path.join(stagingDir, 'pack.py');
      fs.writeFileSync(scriptPath, pyScript, 'utf8');
      execSync(`${pyCmd} "${scriptPath}"`, { stdio: 'inherit' });
      try { fs.unlinkSync(scriptPath); } catch (_) {}
      zipped = true;
      break;
    } catch (_) {}
  }

  // Fallback to Linux zip utility if python is not available
  if (!zipped) {
    try {
      execSync(`cd "${buildDir}" && zip -9 -q -r "${outputZipPath}" . -i@ "${fileListPath}"`, { stdio: 'inherit' });
      zipped = true;
    } catch (zipErr) {
      console.error("❌ Failed to create zip with python and zip utility:", zipErr);
      process.exit(1);
    }
  }

  try { fs.unlinkSync(fileListPath); } catch (_) {}

  // Copy extraction script and replace secret token
  const extractorSrc = path.resolve(process.cwd(), '.github', 'scripts', 'deploy_extract.php');
  const extractorDst = path.join(stagingDir, 'deploy_extract.php');
  let extractorContent = fs.readFileSync(extractorSrc, 'utf8');
  extractorContent = extractorContent.replace(/DEPLOY_SECRET_KEY/g, deploySecret);
  fs.writeFileSync(extractorDst, extractorContent, 'utf8');

  const zipStat = fs.statSync(outputZipPath);
  const zipSizeMb = (zipStat.size / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 Success! Deploy package created:`);
  console.log(`   📁 File: ${zipName}`);
  console.log(`   ⚖️ Size: ${zipSizeMb} MB (${zipStat.size.toLocaleString()} bytes)`);
  console.log(`   🔑 Secret: ${deploySecret}`);
  console.log("----------------------------------------------------------------");
}

main().catch(err => {
  console.error("❌ Packaging error:", err);
  process.exit(1);
});
