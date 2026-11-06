const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");
const dns = require("dns").promises;

function sanitizeHost(s) {
  if (!s) return "";
  s = s.trim();
  s = s.replace(/^[a-zA-Z]+:\/\//, ""); // remove ftp://, ftps://, https://, http://
  s = s.split("/")[0]; // remove path like /public_html
  s = s.split(":")[0]; // remove port like :21
  return s.trim();
}

async function createAndConnectClient(host, user, password, serverDir, useSecure) {
  // Use 300 seconds (5 minutes) socket timeout for large file uploads on Hostinger
  const client = new ftp.Client(300000);
  client.ftp.verbose = false;

  const modeName = useSecure ? "secure FTPS (Port 21, TLS)" : "standard FTP (Port 21)";
  console.log(`🔌 Connecting with ${modeName}...`);

  try {
    await client.access({
      host: host,
      user: user,
      password: password,
      port: 21,
      secure: useSecure,
      secureOptions: { rejectUnauthorized: false }
    });
    console.log(`✅ ${useSecure ? "FTPS" : "FTP"} connection established successfully!`);
  } catch (err) {
    client.close();
    throw err;
  }

  // Switch directory if needed
  if (serverDir && serverDir !== "./" && serverDir !== ".") {
    try {
      console.log(`📂 Switching to directory: ${serverDir}`);
      await client.ensureDir(serverDir);
    } catch (dirErr) {
      console.log(`⚠️ Warning switching dir: ${dirErr.message}, staying in default root.`);
    }
  }

  return client;
}

async function uploadFileWithRetry(host, user, password, serverDir, localFilePath, fileName, maxRetries = 3) {
  const stat = fs.statSync(localFilePath);
  const totalBytes = stat.size;
  const sizeMb = (totalBytes / (1024 * 1024)).toFixed(2);

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    // Attempt 1 tries standard FTP (fast and reliable on Hostinger port 21 without TLS overhead)
    const useSecure = attempt === 2; // only try FTPS on attempt 2 as alternative
    let client = null;

    try {
      console.log(`\n⬆️ [Attempt ${attempt}/${maxRetries}] Uploading ${fileName} (${sizeMb} MB)...`);
      client = await createAndConnectClient(host, user, password, serverDir, useSecure);

      // Clean up any stale Pure-FTPd temporary hidden files that might block upload
      try { await client.send(`DELE .in.${fileName}.`); } catch (_) {}
      try { await client.send(`DELE .in.${fileName}`); } catch (_) {}
      try { await client.send("DELE .in.deploy.zip."); } catch (_) {}
      try { await client.remove(fileName); } catch (_) {}

      const startTime = Date.now();
      let lastReport = 0;

      client.trackProgress(info => {
        const percent = Math.min(100, Math.round((info.bytesOverall / totalBytes) * 100));
        const now = Date.now();
        // Log progress every 5 seconds or when finished
        if (now - lastReport > 5000 || percent === 100) {
          lastReport = now;
          const uploadedMb = (info.bytesOverall / (1024 * 1024)).toFixed(1);
          console.log(`   📊 Upload progress: ${uploadedMb} MB / ${sizeMb} MB (${percent}%)`);
        }
      });

      await client.uploadFrom(localFilePath, fileName);
      client.trackProgress(); // unregister

      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ Successfully uploaded ${fileName} in ${timeTaken}s`);
      client.close();
      return; // Success!
    } catch (err) {
      if (client) {
        try { client.close(); } catch (_) {}
      }

      console.error(`⚠️ Upload failed on attempt ${attempt}: ${err.message}`);

      if (attempt >= maxRetries) {
        throw new Error(`Failed to upload ${fileName} after ${maxRetries} attempts: ${err.message}`);
      }

      console.log(`⏳ Waiting 5 seconds before retrying...`);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

async function run() {
  const rawHost = process.env.FTP_SERVER || "";
  const host = sanitizeHost(rawHost);
  const user = (process.env.FTP_USERNAME || "").trim();
  const password = (process.env.FTP_PASSWORD || "").trim();
  let serverDir = (process.env.FTP_SERVER_DIR || "./").trim();

  const onlyExtractor = process.argv.includes("--only-extractor");

  console.log("----------------------------------------------------------------");
  console.log(onlyExtractor 
    ? "⚡ Hostinger Extractor Uploader" 
    : "🚀 High-Speed Hostinger ZIP Deployment Uploader");
  console.log("----------------------------------------------------------------");

  if (!host) {
    console.error("❌ FTP_SERVER secret is empty or invalid!");
    process.exit(1);
  }

  if (!user || !password) {
    console.error("❌ FTP_USERNAME or FTP_PASSWORD secret is empty!");
    process.exit(1);
  }

  // Test DNS lookup before attempting FTP connection
  try {
    const lookup = await dns.lookup(host);
    console.log(`🌐 Target: ${host} (${lookup.address}) -> ${serverDir}`);
  } catch (dnsErr) {
    console.error(`❌ DNS Lookup failed for "${host}": ${dnsErr.message}`);
    process.exit(1);
  }

  // Check staging directory
  const stagingDir = path.resolve(process.cwd(), "staging");
  if (!fs.existsSync(stagingDir)) {
    console.error(`❌ Staging directory not found at ${stagingDir}`);
    process.exit(1);
  }

  let files = fs.readdirSync(stagingDir);
  if (onlyExtractor) {
    files = files.filter(f => f.endsWith(".php"));
  } else {
    // Put PHP files first so extractor is ready on server
    files.sort((a, b) => a.endsWith(".php") ? -1 : 1);
  }

  console.log(`📦 Found ${files.length} file(s) to upload in staging:`);

  // Upload each file using the retry mechanism
  for (const file of files) {
    const localFilePath = path.join(stagingDir, file);
    await uploadFileWithRetry(host, user, password, serverDir, localFilePath, file, 3);
  }

  console.log("\n----------------------------------------------------------------");
  console.log("🎉 Upload completed successfully!");
  console.log("----------------------------------------------------------------");
}

run().catch(err => {
  console.error("❌ Fatal deployment upload error:", err);
  process.exit(1);
});
