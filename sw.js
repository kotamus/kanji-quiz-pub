const CACHE_NAME = 'kanji-quiz-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/data/grade1.json',
  '/data/grade2.json',
  '/data/grade3.json',
  '/data/grade4.json',
  '/data/grade5.json',
  '/data/grade6.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});