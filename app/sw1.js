// First the Service Worker is installed
this.addEventListener('install', function (event) {
  console.log('The Service Worker has successfully installed!');
});

// After installation, the Service Worker gets activated
this.addEventListener('activate', function (event) {
  console.log('The Service Worker has successfully activated!');
});

// Fire an event every time the browser attempts to fetch a resource
this.addEventListener('fetch', function (event) {
  console.log('Attempting to fetch:', event.request.url);
});
