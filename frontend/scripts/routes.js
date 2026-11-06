// Single source of truth for every indexable URL and its <head> metadata.
// Used by generate-sitemap.js (sitemap.xml) and prerender-routes.js (per-route HTML).
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://iotaflow.com';
const SRC_DIR = path.join(__dirname, '../src');
const SEO_PAGE_PATH = path.join(SRC_DIR, 'pages/SeoPage.jsx');
const routeMeta = require('../src/data/routeMeta.json');

// Reads a string property (e.g. metaTitle: "...") from a JS object literal source
const readStringProp = (source, prop) => {
  const match = source.match(new RegExp(`\\b${prop}\\s*:\\s*(["'\`])((?:\\\\.|(?!\\1)[^\\\\])*)\\1`));
  return match ? match[2].replace(/\\(.)/g, '$1') : undefined;
};

// Returns the source of `export const <name> = {...}` inside a data file
const readExportBlock = (filePath, exportName) => {
  const source = fs.readFileSync(filePath, 'utf8');
  const start = source.indexOf(`export const ${exportName}`);
  if (start === -1) return '';
  const next = source.indexOf('\nexport const', start + 1);
  return source.slice(start, next === -1 ? undefined : next);
};

const titleCase = (slug) =>
  slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Mirrors the meta fallbacks in src/pages/SeoPage.jsx
const getCityRoutes = () => {
  const seoPage = fs.readFileSync(SEO_PAGE_PATH, 'utf8');

  const importFiles = {};
  for (const [, names, file] of seoPage.matchAll(/import\s*\{([^}]+)\}\s*from\s*"(\.\.\/data\/[^"]+)"/g)) {
    names.split(',').map((n) => n.trim()).filter(Boolean).forEach((name) => {
      importFiles[name] = path.join(SRC_DIR, 'pages', `${file}.js`);
    });
  }

  const mapMatch = seoPage.match(/const cityDataMap\s*=\s*\{([\s\S]*?)\};/);
  if (!mapMatch) throw new Error('Could not find cityDataMap in SeoPage.jsx');

  const seenExports = new Set();
  const routes = [];
  for (const [, quoted, bare, exportName] of mapMatch[1].matchAll(/^\s*(?:"([^"]+)"|([a-zA-Z0-9_-]+))\s*:\s*([A-Za-z0-9_]+)/gm)) {
    const slug = quoted || bare;
    // Aliases (a second key for the same data) canonicalise to the first key
    if (seenExports.has(exportName)) continue;
    seenExports.add(exportName);

    const block = importFiles[exportName] ? readExportBlock(importFiles[exportName], exportName) : '';
    const cityName = readStringProp(block, 'city') || titleCase(slug);
    routes.push({
      path: `/${slug}`,
      title: readStringProp(block, 'metaTitle') || `Flow Meter Manufacturer & Suppliers in ${cityName} | IOTAFLOW`,
      description: readStringProp(block, 'metaDescription') || `Leading industrial flow meter manufacturer and supplier in ${cityName}. Expert in electromagnetic, ultrasonic, and thermal mass flow measurement.`,
      keywords: readStringProp(block, 'metaKeywords') || `flow meter manufacturer ${cityName}, industrial flow meter supplier ${cityName}, ultrasonic flow meter ${cityName}, electromagnetic flow meter ${cityName}, industrial automation ${cityName}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  }
  return routes.sort((a, b) => a.path.localeCompare(b.path));
};

// All routes, including non-indexable aliases (needed so they still get an HTML file)
const getAllRoutes = () => {
  const staticRoutes = Object.entries(routeMeta).map(([routePath, meta]) => ({ path: routePath, ...meta }));
  return [...staticRoutes, ...getCityRoutes()];
};

// Routes that belong in the sitemap: canonical, indexable URLs only
const getSitemapRoutes = () => getAllRoutes().filter((r) => r.sitemap !== false && !r.canonical);

module.exports = { BASE_URL, getAllRoutes, getSitemapRoutes };
