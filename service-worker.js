"use strict";var precacheConfig=[["/index.html","6d13a21435ec6132f48abe424ed154f6"],["/static/css/main.f09702d2.css","c49cd0fb469f6d6f62f35477c220d933"],["/static/js/main.4b06e3c9.js","20467a7286eeb9b2be88c6abb3dd55da"],["/static/media/books.0f71bade.png","0f71bade40f1aa231f72edd6fc9a832e"],["/static/media/lava.3d19a406.png","3d19a40658ce4b95445d1951b288c628"],["/static/media/lightsaber.cc8e81be.png","cc8e81be689de2d03ac4ad9a03e5ca7d"],["/static/media/menu.44be326d.png","44be326d1ca7db9e3a59cb8eff8fb268"],["/static/media/minecraftAvatar.6cb26bfb.png","6cb26bfbe9959922d4ed347d3964489d"],["/static/media/mountains.7c2de5fd.png","7c2de5fd88373ad72b7ea981a4e668d1"],["/static/media/mushrooms.32fafc6b.png","32fafc6b31e40b115d98b9796b99d6cb"],["/static/media/nodeJS.841b868d.png","841b868d5afe8077c2deeebf4a95adce"],["/static/media/portals.6c9778ea.png","6c9778ea1eb1d488ac8aa282bb30f81a"],["/static/media/shapeBuilder.ba241922.png","ba241922e338ec0d7f16617660fb1e58"],["/static/media/snake.eeb4ac77.png","eeb4ac7727e20232f254cd4990496bb2"],["/static/media/startZone.6d89ea9e.png","6d89ea9e4a1e9f0301ac9f675748a149"],["/static/media/zeoForest.4b1a3fad.png","4b1a3fad4670fa4ffe69e3762b9ad61a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});