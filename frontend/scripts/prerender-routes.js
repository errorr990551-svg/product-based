// Post-build step: writes build/<route>.html for every route.
//  1. Each file gets that page's own <title>, description, canonical and Open
//     Graph tags baked into the <head>.
//  2. The page body is rendered in a headless browser and baked into
//     <div id="root">, so search engines and social crawlers see the full page
//     text without running JavaScript. React re-renders over it on load.
// Also writes build/404.html (noindex) which .htaccess serves with a real 404.
// If Playwright/Chromium is unavailable, falls back to head-only output.
const fs = require('fs');
const http = require('http');
const path = require('path');
const { BASE_URL, getAllRoutes } = require('./routes');

const BUILD_DIR = path.join(__dirname, '../build');
const template = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 6);

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

// Puts rendered markup into <div id="root"> and adds lazily loaded CSS chunks
const injectBody = (html, { rootHtml, styles }) => {
  let out = html.replace('<div id="root"></div>', () => `<div id="root">${rootHtml}</div>`);
  if (styles.length) {
    const links = styles.map((href) => `<link href="${escapeHtml(href)}" rel="stylesheet">`).join('');
    out = out.replace('</head>', () => `${links}</head>`);
  }
  return out;
};

const outFileFor = (routePath) =>
  routePath === '/' ? path.join(BUILD_DIR, 'index.html') : path.join(BUILD_DIR, `${routePath.slice(1)}.html`);

const MIME = {
  '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.txt': 'text/plain',
};

// Static server over build/ that answers every page URL with the untouched SPA template
const startServer = () =>
  new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = path.join(BUILD_DIR, urlPath);
      const ext = path.extname(urlPath).toLowerCase();
      if (ext && ext !== '.html' && filePath.startsWith(BUILD_DIR) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
        return;
      }
      if (ext && ext !== '.html') {
        res.writeHead(404);
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(template);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });

const BLOCKED_HOSTS = /clarity\.ms|googletagmanager|google-analytics|doubleclick|youtube|ytimg|facebook|hotjar/;

const renderBodies = async (routes) => {
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch (err) {
    console.warn('prerender: playwright not installed, writing head-only HTML');
    return {};
  }

  let browser;
  try {
    browser = await chromium.launch();
  } catch (err) {
    console.warn(`prerender: could not launch Chromium (${err.message.split('\n')[0]}), writing head-only HTML`);
    return {};
  }

  const server = await startServer();
  const origin = `http://127.0.0.1:${server.address().port}`;
  const templateStyles = new Set([...template.matchAll(/<link href="([^"]+\.css)"/g)].map((m) => m[1]));
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  // Keep the contact popup closed so it is not baked into the HTML
  await context.addInitScript(() => {
    try { window.localStorage.setItem('contactDetailsRevealed', 'true'); } catch (e) { /* ignore */ }
  });
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith(origin)) return route.continue();
    if (BLOCKED_HOSTS.test(url) || ['media', 'font'].includes(route.request().resourceType())) return route.abort();
    return route.continue();
  });

  const results = {};
  const queue = [...routes];
  const worker = async () => {
    const page = await context.newPage();
    while (queue.length) {
      const route = queue.shift();
      try {
        await page.goto(origin + route.path, { waitUntil: 'load', timeout: 30000 });
        await page.waitForSelector('#root h1, #root h2', { timeout: 20000 });
        await page.waitForTimeout(300);
        const rendered = await page.evaluate(() => {
          const root = document.getElementById('root');
          // Drop scripts/iframes injected by components; they re-run when React mounts
          root.querySelectorAll('script, iframe').forEach((el) => el.remove());
          return {
            rootHtml: root.innerHTML,
            styles: [...document.querySelectorAll('link[rel="stylesheet"]')].map((l) => l.getAttribute('href')),
          };
        });
        results[route.path] = {
          rootHtml: rendered.rootHtml,
          styles: rendered.styles.filter((href) => href && href.startsWith('/') && !templateStyles.has(href)),
        };
      } catch (err) {
        console.warn(`prerender: body render failed for ${route.path} (${err.message.split('\n')[0]}), head only`);
      }
    }
    await page.close();
  };

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  await browser.close();
  server.close();
  return results;
};

(async () => {
  const routes = getAllRoutes();
  const bodies = await renderBodies(routes);

  for (const route of routes) {
    let html = renderHead(template, {
      title: route.title,
      description: route.description,
      keywords: route.keywords,
      canonicalUrl: BASE_URL + (route.canonical || route.path),
    });
    if (bodies[route.path]) html = injectBody(html, bodies[route.path]);
    const outFile = outFileFor(route.path);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');
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

  console.log(`Prerendered ${routes.length} routes (${Object.keys(bodies).length} with full body) + 404.html`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
