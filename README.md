# Service Worker Demo

## What are Service Workers?
A Service Worker acts as a **proxy** between the browser and the network. It can:

- Serve a custom "offline" template when there is no connection
- Cache and serve assets like JavaScript, CSS and images
- Fire custom events when the browser attempts to fetch
- Much, much more

## Security
Service Workers can _only_ be utilized if the site is being served from `localhost` or runs on HTTPS. This is to prevent a Service Worker being intercepted and asked to download malicious content.

## Demo

### Listen for any browser requests and do something on those events
```js
// Log out the request every time something is fetched
self.addEventListener('fetch', function(event) {
  console.log(event.request);
});
```
