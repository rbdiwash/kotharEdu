/**
 * Server-side meta injection for /news/:id
 *
 * WHY: Facebook (and other crawlers) request the URL and read the initial HTML
 * only. They do not run React. So og:* meta tags added by react-helmet in the
 * browser are never seen. This script injects article-specific meta into the
 * HTML before sending it.
 *
 * META FROM URL (no API): If the request has query params, we use those first:
 *   ?title=...     - article title (required to skip API)
 *   ?description=... - og:description (optional)
 *   ?image=...     - full image URL for og:image (optional)
 *   ?date=...      - ISO date for article:published_time (optional)
 * Example: /news/123?title=My+Article&description=...&image=https://...
 * If title is present, we inject from URL and do not call the API.
 *
 * USAGE: Add middleware for /news/:id; see server/README.md or serve.js.
 * ENV: BACKEND_URL, SITE_ORIGIN
 */

const path = require("path");
const fs = require("fs");

const BACKEND_URL = process.env.BACKEND_URL || process.env.REACT_APP_BACKEND_URL || "https://kothar-consultancy.vercel.app/kothar/";
const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://kotharedu.com";

function stripHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, "").trim().slice(0, 160);
}

async function fetchNewsArticle(id) {
  try {
    const res = await fetch(`${BACKEND_URL.replace(/\/$/, "")}/news`);
    const data = await res.json();
    const list = data?.news || [];
    const article = Array.isArray(list) ? list.find((n) => String(n?.id) === String(id)) : null;
    return article;
  } catch (e) {
    console.error("Meta injection: fetch news failed", e);
    return null;
  }
}

function injectMetaIntoHtml(html, meta, id) {
  const topic = meta?.title || meta?.topic || "News";
  const description = (meta?.description && stripHtml(meta.description).slice(0, 160)) || topic;
  const shareUrl = `${SITE_ORIGIN}/news/${id}`;
  let imageUrl = meta?.image;
  if (imageUrl && !imageUrl.startsWith("http")) {
    imageUrl = imageUrl.startsWith("/") ? `${SITE_ORIGIN}${imageUrl}` : `${SITE_ORIGIN}/${imageUrl}`;
  }
  if (!imageUrl) imageUrl = `${SITE_ORIGIN}/kothar_logo.png`;

  const replacements = [
    [/<title>[^<]*<\/title>/, `<title>${escapeHtml(topic)} - News - Kothar Education</title>`],
    [/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapeHtml(description)}" />`],
    [/<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/, `<meta property="og:type" content="article" />`],
    [/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${escapeHtml(shareUrl)}" />`],
    [/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeHtml(topic)}" />`],
    [/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escapeHtml(description)}" />`],
    [/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`],
  ];

  let out = html;
  for (const [regex, replacement] of replacements) {
    out = out.replace(regex, replacement);
  }

  if (!out.includes('property="article:published_time"') && meta?.date) {
    const isoDate = new Date(meta.date).toISOString();
    out = out.replace(
      /(<meta\s+property="og:image"[^>]+>)/,
      `<meta property="article:published_time" content="${isoDate}" />\n    $1`
    );
  }

  return out;
}

function safeDecode(s) {
  try {
    return decodeURIComponent(String(s));
  } catch {
    return String(s);
  }
}

/**
 * Build meta from request query params (title, description, image).
 * Used when share URL includes ?title=... so we can serve meta without calling the API.
 */
function metaFromQuery(req) {
  const title = req.query?.title;
  if (!title) return null;
  const meta = {
    title: safeDecode(title),
    topic: safeDecode(title),
  };
  if (req.query?.description) meta.description = safeDecode(req.query.description);
  if (req.query?.image) meta.image = safeDecode(req.query.image);
  if (req.query?.date) meta.date = safeDecode(req.query.date);
  return meta;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Express-style middleware: inject meta for /news/:id and serve index.html
 * Usage: app.get('/news/:id', metaInjectionMiddleware(htmlString));
 * Or use a catch-all that checks path and calls this.
 */
function metaInjectionMiddleware(indexHtml) {
  return async function (req, res, next) {
    const match = req.path.match(/^\/news\/([^/]+)$/);
    if (!match) return next();
    const id = match[1];

    // Prefer meta from URL query (?title=...&description=...&image=...) so we can serve without API
    let meta = metaFromQuery(req);
    if (!meta) {
      const article = await fetchNewsArticle(id);
      meta = article ? { title: article.topic, topic: article.topic, description: article.description, image: article.image, date: article.date } : { title: "News" };
    }

    const html = injectMetaIntoHtml(indexHtml, meta, id);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  };
}

/**
 * Load index.html from build and return middleware
 */
function loadAndCreateMiddleware(buildDir) {
  const indexPath = path.join(buildDir, "index.html");
  const html = fs.readFileSync(indexPath, "utf-8");
  return metaInjectionMiddleware(html);
}

module.exports = {
  fetchNewsArticle,
  injectMetaIntoHtml,
  metaInjectionMiddleware,
  loadAndCreateMiddleware,
  metaFromQuery,
};
