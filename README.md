# Service Worker Demo

## What are Service Workers?
A Service Worker acts as a **proxy** between the browser and the network. It can:

- Serve a custom "offline" template when there is no connection
- Cache and serve assets like JavaScript, CSS and images
- Fire custom events when the browser attempts to fetch
- Much, much more

## Security
Service Workers can _only_ be utilized if the site is being served from `localhost` or runs on HTTPS. This is to prevent a Service Worker being intercepted and asked to download malicious content.

## Resources
**Note**: Large portions about Service Workers were blatantly copied directly from the following resources. I merely am reiterating this same information in the form of a short demo. If you'd like to find stronger, more thorough, better explained information on Service Workers please check out the following sites:

- [Service workers explained](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md)
- [Making a Simple Site Work Offline with ServiceWorker](https://ponyfoo.com/articles/simple-offline-site-serviceworker)
= [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Updating_your_service_worker)
