const cacheName = "Togo-pwa";

const filesToCache = [
  "/",
  "/index.html",
  "/views/contact.html",
  "/js/index.js",
  "/css/styles.css",
];

/**
 * Start the service work and cache all of the app's content
 */

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

/**
 * Serve cache content when offline
 */

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
