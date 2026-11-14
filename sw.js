/* AWS GenAI Pro — offline service worker.
   Precaches the whole course on install so it works with no network.
   Bump CACHE whenever any cached file changes, to force a refresh. */
'use strict';

var CACHE = 'awsgenai-v1';

// Paths are relative to this file's location (the site root), so they work
// whether the site is served at "/" or at "/aws-tutorial/".
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/app.css',
  './assets/app.js',
  './assets/sims.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png',
  './content/exam.js',
  './content/m00.js', './content/m01.js', './content/m02.js', './content/m03.js',
  './content/m04.js', './content/m05.js', './content/m06.js', './content/m07.js',
  './content/m08.js', './content/m09.js', './content/m10.js', './content/m11.js',
  './content/m12.js', './content/m13.js', './content/m14.js', './content/m15.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) { return caches.delete(k); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Cache-first for same-origin GETs. Fall back to the network (and cache the
// result) for anything not precached; if both fail, serve index.html for
// navigations so the app still opens offline.
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') { return; }
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) { return; }

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) { return hit; }
      return fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        if (req.mode === 'navigate') { return caches.match('./index.html'); }
      });
    })
  );
});
