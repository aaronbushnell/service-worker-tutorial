/*
 * An offline-first approach using Service Workers
 * This approach takes an array of assets, caches them, and reads *only* from the Service Worker
 */

// Use a currentVersion variable so we can make modifications and allow the old Service Worker assets to be uncached
let currentVersion = 'v2';

this.addEventListener('install', function (event) {
  // Do not consider the Service Worker "installed" until the following event completes
  event.waitUntil(
    // Create a named cache container that caches all the assets specified in the array
    caches.open(currentVersion).then(function (cache) {
      return cache.addAll([
        '/',
        '/_tmp/scripts/vendor.js',
        '/_tmp/scripts/app.js',
        '/assets/images/offline.png'
      ]);
    })
  );
});

/*
 * Events when the Service Worker is activated
 */
this.addEventListener('activate', function (event) {
  // Setup a whitelist of the active Service Worker version so we don't delete the current version's assets
  let cacheWhitelist = [currentVersion];

  // Don't consider the Service Worker "activated" until the following events have completed
  event.waitUntil(
    // Loop through the cache and clear out any old assets that should not be part of the current version
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

/*
 * When the browser fetches something, intercept the event and before an action
 */
this.addEventListener('fetch', function (event) {
  let response;

  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function (r) {
    response = r;

    caches.open(currentVersion).then(function(cache) {
      cache.put(event.request, response);
    });

    return response.clone();
  }).catch(function() {
    return caches.match('/assets/images/offline.png');
  }));
});
