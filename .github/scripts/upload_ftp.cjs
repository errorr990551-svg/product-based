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

async function run() {
  const rawHost = process.env.FTP_SERVER || "";
  const host = sanitizeHost(rawHost);
  const user = (process.env.FTP_USERNAME || "").trim();
  const password = (process.env.FTP_PASSWORD || "").trim();
  let serverDir = (process.env.FTP_SERVER_DIR || "./").trim();

  console.log("----------------------------------------------------------------");
  console.log("🚀 High-Speed Hostinger ZIP Deployment Uploader");
  console.log("----------------------------------------------------------------");

  if (!host) {
    console.error("❌ FTP_SERVER secret is empty or invalid!");
    console.error("👉 Please add FTP_SERVER in GitHub Secrets (e.g. 217.21.90.3 or your Hostinger FTP hostname)");
    process.exit(1);
  }

  if (!user || !password) {
    console.error("❌ FTP_USERNAME or FTP_PASSWORD secret is empty!");
    process.exit(1);
  }

  console.log(`🔍 Target Host: ${host}`);
  console.log(`👤 Target User: ${user}`);
  console.log(`📁 Target Remote Dir: ${serverDir}`);

  // Test DNS lookup before attempting FTP connection
  try {
    const lookup = await dns.lookup(host);
    console.log(`🌐 Resolved ${host} -> IP ${lookup.address}`);
  } catch (dnsErr) {
    console.error(`❌ DNS Lookup failed for "${host}": ${dnsErr.message}`);
    console.error("----------------------------------------------------------------");
    console.error("💡 How to fix this:");
    console.error("1. Go to Hostinger -> Websites -> FTP Accounts");
    console.error("2. Look at 'FTP IP' (for example: 217.21.90.3) or 'FTP Hostname'");
    console.error("3. Update your GitHub Secret FTP_SERVER with that exact IP or Hostname without 'ftp://' or ':21'");
    console.error("----------------------------------------------------------------");
    process.exit(1);
  }

  const client = new ftp.Client(30000); // 30s timeout
  client.ftp.verbose = false;

  let connected = false;

  // 1. Try secure FTPS first
  try {
    console.log("🔒 Connecting with secure FTPS (Port 21, TLS)...");
    await client.access({
      host: host,
      user: user,
      password: password,
      port: 21,
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    });
    connected = true;
    console.log("✅ FTPS connection established successfully!");
  } catch (ftpsErr) {
    console.log(`⚠️ FTPS connection note (${ftpsErr.message}). Retrying with plain FTP...`);
    try {
      await client.access({
        host: host,
        user: user,
        password: password,
        port: 21,
        secure: false
      });
      connected = true;
      console.log("✅ FTP connection established successfully!");
    } catch (ftpErr) {
      console.error("----------------------------------------------------------------");
      console.error(`❌ FTP Connection failed: ${ftpErr.message}`);
      if (
        ftpErr.message.includes("530") ||
        ftpErr.message.toLowerCase().includes("login") ||
        ftpErr.message.toLowerCase().includes("authentication")
      ) {
        console.error("👉 530 Login Authentication Failed: Please check your FTP_USERNAME and FTP_PASSWORD in GitHub Secrets.");
      }
      console.error("----------------------------------------------------------------");
      process.exit(1);
    }
  }

  // 2. Change remote directory if needed
  if (serverDir && serverDir !== "./" && serverDir !== ".") {
    try {
      console.log(`📂 Switching to directory: ${serverDir}`);
      await client.ensureDir(serverDir);
    } catch (dirErr) {
      console.log(`⚠️ Warning switching dir: ${dirErr.message}, staying in default root.`);
    }
  }

  // 3. Upload files from staging
  const stagingDir = path.resolve(process.cwd(), "staging");
  if (!fs.existsSync(stagingDir)) {
    console.error(`❌ Staging directory not found at ${stagingDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(stagingDir);
  console.log(`📦 Found ${files.length} file(s) to upload in staging:`);

  for (const file of files) {
    const localFilePath = path.join(stagingDir, file);
    const stat = fs.statSync(localFilePath);
    const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);
    const startTime = Date.now();
    console.log(`⬆️ Uploading ${file} (${sizeMb} MB)...`);
    await client.uploadFrom(localFilePath, file);
    const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`✅ Uploaded ${file} in ${timeTaken}s`);
  }

  client.close();
  console.log("----------------------------------------------------------------");
  console.log("🎉 All files uploaded to Hostinger in record time!");
  console.log("----------------------------------------------------------------");
}

run().catch(err => {
  console.error("❌ Unexpected upload error:", err);
  process.exit(1);
});
