const fs = require('fs');
const path = require('path');
const { BASE_URL, getSitemapRoutes } = require('./routes');

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Current Date formatted as YYYY-MM-DD
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const escapeXml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const urlEntry = (route) => `  <url>
    <loc>${escapeXml(BASE_URL + route.path)}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.8'}</priority>
  </url>`;

const routes = getSitemapRoutes();

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(urlEntry).join('\n')}
</urlset>
`;

try {
  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log(`Successfully generated sitemap.xml at ${SITEMAP_PATH}`);
  console.log(`Total URLs: ${routes.length}`);
} catch (err) {
  console.error('Failed to write sitemap.xml:', err);
  process.exit(1);
}
