(function () {
  function doSomething () {
    console.log('We have installed successfully!');
  }

  function doSomethingElse () {
    console.log('We have activated successfully!');
  }

  self.addEventListener('install', function (event) {
    event.waitUntil(doSomething());
  });

  self.addEventListener('activate', function (event) {
    event.waitUntil(doSomethingElse());
  });
})();
