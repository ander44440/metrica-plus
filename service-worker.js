const CACHE_NAME = "metrica-v5";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",

  "./js/app.js",
  "./js/conversores.js",
  "./js/refrigeracao.js",
  "./js/eletrica.js",
  "./js/diagnostico.js",
  "./js/fluidos.js",

  "./img/logo-metrica.png",
  "./icon-192.png",
  "./icon-512.png"
];

// INSTALAÇÃO
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// ATIVAÇÃO
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// FETCH (OFFLINE FIRST)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});