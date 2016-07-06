# Service Worker Demo

```
// Log out the request every time something is fetched
self.addEventListener('fetch', function(event) {
  console.log(event.request);
});
```
