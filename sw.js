const cachename = "wholesite-v1";
const precache = [
  "/",
  "index.html",
  "index.js",
  "images/disco_ball_1.mtl",
  "images/disco_ball_1.obj",
  "images/floor.png",
  "images/B.jpg",
  "images/R.jpg",
  "images/G.jpg",
];

self.addEventListener("install", (event) => {
  console.log("Service worker installing");
  event.waitUntil(
    caches.open(cachename).then((cache) => {
      return cache.addAll(precache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Activating worker", event);
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching for ", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        return cacheResponse;
      }
      return fetch(event.request);
    })
  );
});
