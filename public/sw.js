const CACHE_NAME = "kothar-edu-v1.0.0";
const STATIC_CACHE = "kothar-static-v1.0.0";
const DYNAMIC_CACHE = "kothar-dynamic-v1.0.0";

// Resources to cache immediately
const STATIC_ASSETS = [
  "/",
  "/static/js/bundle.js",
  "/static/css/main.css",
  "/manifest.json",
  "/favicon.ico",
  "/kothar_logo.png",
];

// External resources to cache
const EXTERNAL_RESOURCES = [
  "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  "https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&display=swap",
  "https://flagcdn.com/w80/au.png",
  "https://flagcdn.com/w80/ca.png",
  "https://flagcdn.com/w80/gb.png",
  "https://flagcdn.com/w80/us.png",
];

// Image optimization settings
const IMAGE_CACHE_STRATEGY = {
  // Cache images for 30 days
  maxAge: 30 * 24 * 60 * 60 * 1000,
  // Maximum cache size for images (50MB)
  maxCacheSize: 50 * 1024 * 1024,
  // Image formats to cache
  supportedFormats: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
  // Quality settings
  quality: 75,
};

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log("Static assets cached successfully");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("Error caching static assets:", error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("Service Worker activated");
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith("http")) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        console.log("Serving from cache:", request.url);
        return cachedResponse;
      }

      // Otherwise fetch from network
      return fetch(request)
        .then((networkResponse) => {
          // Don't cache if not a valid response
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          // Clone the response
          const responseToCache = networkResponse.clone();

          // Determine which cache to use
          let targetCache = DYNAMIC_CACHE;

          // Static assets go to static cache
          if (
            url.pathname.startsWith("/static/") ||
            url.pathname.endsWith(".css") ||
            url.pathname.endsWith(".js") ||
            url.pathname.endsWith(".woff") ||
            url.pathname.endsWith(".woff2")
          ) {
            targetCache = STATIC_CACHE;
          }

          // Images get special treatment
          if (
            url.pathname.endsWith(".png") ||
            url.pathname.endsWith(".jpg") ||
            url.pathname.endsWith(".jpeg") ||
            url.pathname.endsWith(".webp") ||
            url.pathname.endsWith(".svg") ||
            networkResponse.headers.get("content-type")?.startsWith("image/")
          ) {
            targetCache = DYNAMIC_CACHE;

            // Add cache headers for images
            const headers = new Headers(networkResponse.headers);
            headers.set(
              "Cache-Control",
              `public, max-age=${IMAGE_CACHE_STRATEGY.maxAge / 1000}`
            );

            // Clone response with new headers
            const modifiedResponse = new Response(networkResponse.body, {
              status: networkResponse.status,
              statusText: networkResponse.statusText,
              headers: headers,
            });

            // Cache the modified response
            caches
              .open(targetCache)
              .then((cache) => {
                cache.put(request, modifiedResponse.clone());
                console.log("Cached optimized image:", request.url);
              })
              .catch((error) => {
                console.error("Error caching image:", error);
              });

            return modifiedResponse;
          }

          // Cache the response
          caches
            .open(targetCache)
            .then((cache) => {
              cache.put(request, responseToCache);
              console.log("Cached new resource:", request.url);
            })
            .catch((error) => {
              console.error("Error caching resource:", error);
            });

          return networkResponse;
        })
        .catch((error) => {
          console.error("Fetch failed:", error);

          // Return offline page for navigation requests
          if (request.mode === "navigate") {
            return (
              caches.match("/") || new Response("Offline", { status: 503 })
            );
          }

          // Return a fallback for other requests
          return new Response("Network error", { status: 503 });
        });
    })
  );
});

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    console.log("Background sync triggered");
    event.waitUntil(
      // Handle offline actions here
      Promise.resolve()
    );
  }
});

// Push notifications
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "/kothar_logo.png",
      badge: "/kothar_logo.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [
        {
          action: "explore",
          title: "View Details",
          icon: "/kothar_logo.png",
        },
        {
          action: "close",
          title: "Close",
          icon: "/kothar_logo.png",
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click handler
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"));
  }
});

// Cache management utilities
const clearOldCaches = async () => {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(
    (name) =>
      name.startsWith("kothar-") &&
      name !== STATIC_CACHE &&
      name !== DYNAMIC_CACHE
  );

  return Promise.all(oldCaches.map((cacheName) => caches.delete(cacheName)));
};

// Periodic cache cleanup (every 24 hours)
setInterval(clearOldCaches, 24 * 60 * 60 * 1000);
