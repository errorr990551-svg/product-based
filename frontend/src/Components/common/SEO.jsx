import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routeMeta from '../../data/routeMeta.json';

export const SITE_URL = 'https://iotaflow.com';

// Normalise a pathname so every URL has exactly one canonical form
// (lowercase, no trailing slash except for the homepage).
export const normalizePath = (pathname = '/') => {
  let path = pathname.toLowerCase().replace(/\/{2,}/g, '/');
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path || '/';
};

const upsertMeta = (attr, key, content) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

// Sets title, description, keywords, canonical, Open Graph and robots tags.
// Props override the entry for the current path in src/data/routeMeta.json.
const SEO = ({ title, description, keywords, canonicalPath, noindex = false }) => {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);
  const meta = routeMeta[path] || {};

  const finalTitle = title || meta.title;
  const finalDescription = description || meta.description;
  const finalKeywords = keywords || meta.keywords;
  const canonicalUrl = `${SITE_URL}${normalizePath(canonicalPath || meta.canonical || path)}`;

  useEffect(() => {
    if (finalTitle) {
      document.title = finalTitle;
      upsertMeta('property', 'og:title', finalTitle);
    }
    if (finalDescription) {
      upsertMeta('name', 'description', finalDescription);
      upsertMeta('property', 'og:description', finalDescription);
    }
    if (finalKeywords) {
      upsertMeta('name', 'keywords', finalKeywords);
    }

    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    if (noindex) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    } else {
      upsertCanonical(canonicalUrl);
      upsertMeta('property', 'og:url', canonicalUrl);
    }
  }, [finalTitle, finalDescription, finalKeywords, canonicalUrl, noindex]);

  return null;
};

export default SEO;
