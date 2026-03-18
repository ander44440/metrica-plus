const CACHE_NAME = "metrica-v2";

const urlsToCache = [
"/",
"/index.html",
"/style.css",
"/js/app.js",
"/js/conversores.js",
"/js/refrigeracao.js",
"/js/eletrica.js",
"/js/diagnostico.js"
];

self.addEventListener("install", event => {

event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);

self.skipWaiting();

});

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

self.addEventListener("fetch", event => {

event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);

});