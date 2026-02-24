/**
 * Example server: serves the React build and injects meta for /news/:id
 * so Facebook and other crawlers see the correct og:* tags.
 *
 * Prerequisites: npm install express
 * Build: npm run build
 * Run: BACKEND_URL=https://your-api.com node server/serve.js
 *
 * Requires Node 18+ (for fetch) or install node-fetch and use it in meta-injection.js
 */
const path = require("path");
const express = require("express");
const { loadAndCreateMiddleware } = require("./meta-injection");

const app = express();
const buildDir = path.resolve(__dirname, "..", "build");

app.use(express.static(buildDir));

const injectMeta = loadAndCreateMiddleware(buildDir);
app.get("/news/:id", injectMeta);

app.get("*", (req, res) => {
  res.sendFile(path.join(buildDir, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serving with meta injection at http://localhost:${PORT}`);
  console.log("Set BACKEND_URL and SITE_ORIGIN in env for production.");
});
