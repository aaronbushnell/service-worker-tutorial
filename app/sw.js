(function () {
  function doSomething () {
    console.log('We have installed successfully!');
  }

  function doSomethingElse () {
    console.log('We have activated successfully!');
  }

  // First the Service Worker is installed
  self.addEventListener('install', function (event) {
    event.waitUntil(doSomething());
  });

  // After installation, the Service Worker gets activated
  self.addEventListener('activate', function (event) {
    event.waitUntil(doSomethingElse());
  });
})();
