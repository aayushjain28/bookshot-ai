// FPU service worker — makes the app installable and work offline on the commute.
// Progress is stored in localStorage (per-origin, persistent once installed).
const CACHE = "fpu-cache-v1";
const BASE = new URL(self.registration.scope).pathname; // "/" or "/bookshot-ai/"

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((c) => c.add(BASE)).catch(() => {}));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only handle our own origin; let YouTube, thumbnails, etc. hit the network.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const fromNetwork = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);

      if (req.mode === "navigate") {
        // Pages: try network first for freshness, fall back to cache, then home.
        const net = await fromNetwork;
        return net || cached || (await cache.match(BASE)) || Response.error();
      }
      // Assets (JS/CSS/images/data): cache-first, refresh in the background.
      return cached || (await fromNetwork) || Response.error();
    })()
  );
});
