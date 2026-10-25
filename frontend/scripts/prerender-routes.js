// Post-build step: writes build/<route>.html for every route with that page's
// own <title>, description, canonical and Open Graph tags baked into the HTML,
// so crawlers never see the homepage canonical on inner pages. Also writes
// build/404.html (noindex) which .htaccess serves with a real 404 status.
const fs = require('fs');
const path = require('path');
const { BASE_URL, getAllRoutes } = require('./routes');

const BUILD_DIR = path.join(__dirname, '../build');
const template = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Replaces the content of a tag that must already exist in public/index.html
const replaceOrFail = (html, regex, replacement, label) => {
  if (!regex.test(html)) throw new Error(`prerender: ${label} not found in build/index.html`);
  return html.replace(regex, replacement);
};

const renderHead = (html, { title, description, keywords, canonicalUrl, noindex }) => {
  let out = html;
  out = replaceOrFail(out, /<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`, '<title>');
  out = replaceOrFail(out, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapeHtml(description)}"/>`, 'meta description');
  if (keywords) {
    out = replaceOrFail(out, /<meta name="keywords" content="[^"]*"\s*\/?>/, `<meta name="keywords" content="${escapeHtml(keywords)}"/>`, 'meta keywords');
  }
  out = replaceOrFail(out, /<meta name="robots" content="[^"]*"\s*\/?>/, `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}"/>`, 'meta robots');
  out = replaceOrFail(out, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeHtml(title)}"/>`, 'og:title');
  out = replaceOrFail(out, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escapeHtml(description)}"/>`, 'og:description');

  if (noindex) {
    out = replaceOrFail(out, /<link rel="canonical" href="[^"]*"\s*\/?>/, '', 'canonical');
    out = replaceOrFail(out, /<meta property="og:url" content="[^"]*"\s*\/?>/, '', 'og:url');
  } else {
    out = replaceOrFail(out, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}"/>`, 'canonical');
    out = replaceOrFail(out, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}"/>`, 'og:url');
  }
  return out;
};

let count = 0;
for (const route of getAllRoutes()) {
  const html = renderHead(template, {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    canonicalUrl: BASE_URL + (route.canonical || route.path),
  });
  const outFile = route.path === '/'
    ? path.join(BUILD_DIR, 'index.html')
    : path.join(BUILD_DIR, `${route.path.slice(1)}.html`);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, 'utf8');
  count += 1;
}

fs.writeFileSync(
  path.join(BUILD_DIR, '404.html'),
  renderHead(template, {
    title: 'Page Not Found | IOTAFLOW Systems',
    description: 'The page you are looking for does not exist.',
    noindex: true,
  }),
  'utf8'
);

console.log(`Prerendered <head> for ${count} routes + 404.html`);
