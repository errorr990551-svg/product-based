const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://iotaflow.com';
const SEO_PAGE_PATH = path.join(__dirname, '../src/pages/SeoPage.jsx');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Current Date formatted as YYYY-MM-DD
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// 1. Define Static/Core Routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about-us', priority: '0.9', changefreq: 'monthly' },
  { path: '/about-us/certification', priority: '0.7', changefreq: 'yearly' },
  { path: '/about-us/approval', priority: '0.7', changefreq: 'yearly' },
  { path: '/product', priority: '0.9', changefreq: 'weekly' },
  { path: '/product2', priority: '0.8', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/lean-manufacturing', priority: '0.8', changefreq: 'monthly' },
  { path: '/seo', priority: '0.8', changefreq: 'monthly' },
  { path: '/iotsense', priority: '0.9', changefreq: 'monthly' },
  { path: '/accessories', priority: '0.8', changefreq: 'monthly' },
  { path: '/careers', priority: '0.7', changefreq: 'monthly' },
  { path: '/complaint', priority: '0.6', changefreq: 'yearly' },
  { path: '/application-form', priority: '0.6', changefreq: 'yearly' },
  { path: '/casestudies', priority: '0.9', changefreq: 'monthly' },
  { path: '/market-area', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' }
];

// 2. Define Case Study Routes
const caseStudiesRoutes = [];
for (let i = 1; i <= 6; i++) {
  caseStudiesRoutes.push({ path: `/case-studies/${i}`, priority: '0.8', changefreq: 'monthly' });
}

// 3. Define Product Detail Routes (detail2 through detail25, including detail7b)
const productDetailRoutes = [];
for (let i = 2; i <= 25; i++) {
  productDetailRoutes.push({ path: `/product-detail/detail${i}`, priority: '0.9', changefreq: 'weekly' });
  if (i === 7) {
    productDetailRoutes.push({ path: '/product-detail/detail7b', priority: '0.9', changefreq: 'weekly' });
  }
}

// 4. Dynamically Parse City routes from cityDataMap in SeoPage.jsx
const getCityRoutes = () => {
  try {
    const seoPageContent = fs.readFileSync(SEO_PAGE_PATH, 'utf8');
    const mapMatch = seoPageContent.match(/const cityDataMap\s*=\s*\{([\s\S]*?)\};/);
    if (!mapMatch) {
      console.warn('Could not find cityDataMap block in SeoPage.jsx. Using empty city list.');
      return [];
    }

    const block = mapMatch[1];
    const regex = /^\s*(?:"([^"]+)"|([a-zA-Z0-9_-]+))\s*:/gm;
    const cities = [];
    let match;
    while ((match = regex.exec(block)) !== null) {
      const city = match[1] || match[2];
      if (city && !cities.includes(city)) {
        cities.push(city);
      }
    }
    
    // Sort cities alphabetically for a clean sitemap
    cities.sort();

    return cities.map(city => ({
      path: `/${city}`,
      priority: '0.8',
      changefreq: 'monthly'
    }));
  } catch (error) {
    console.error('Error reading/parsing city routes from SeoPage.jsx:', error);
    return [];
  }
};

const cityRoutes = getCityRoutes();

// Helper to generate the URL element string
const urlEntry = (route) => {
  return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
};

// Build the complete Sitemap XML content
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Homepage -->
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Main Pages -->
`;

staticRoutes.filter(r => r.path !== '/').forEach(route => {
  sitemapXml += urlEntry(route) + '\n\n';
});

sitemapXml += `  <!-- Case Studies -->\n`;
caseStudiesRoutes.forEach(route => {
  sitemapXml += urlEntry(route) + '\n';
});
sitemapXml += '\n';

sitemapXml += `  <!-- Product Detail Pages (High SEO Value) -->\n`;
productDetailRoutes.forEach(route => {
  sitemapXml += urlEntry(route) + '\n';
});
sitemapXml += '\n';

sitemapXml += `  <!-- City Landing Pages (SEO Optimization) -->\n`;
cityRoutes.forEach(route => {
  sitemapXml += urlEntry(route) + '\n';
});

sitemapXml += `\n</urlset>\n`;

// Write to the sitemap.xml file
try {
  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log(`Successfully generated sitemap.xml at ${SITEMAP_PATH}`);
  console.log(`Total URLs: ${1 + staticRoutes.length - 1 + caseStudiesRoutes.length + productDetailRoutes.length + cityRoutes.length}`);
} catch (err) {
  console.error('Failed to write sitemap.xml:', err);
  process.exit(1);
}
