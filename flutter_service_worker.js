'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cc1fa9cce5af273c0909d105387fee89",
"index.html": "1c53a585b6f08314d3e6b18e55c34288",
"/": "1c53a585b6f08314d3e6b18e55c34288",
"main.dart.js": "f2f89443fcd9d6e83ced3046e2a445c2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a67989697c366cf4f821bde4733a6ca8",
"assets/AssetManifest.json": "b7b83467ecb0605b3c214fa72ab3c2bf",
"assets/NOTICES": "a75a06a72126e94574ef97e416479a27",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "2d9af877e1b025cd43c4cec9d78182bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e8750a45a998e7124db55919da161abf",
"assets/fonts/MaterialIcons-Regular.otf": "cf4498f02396c4a68dd9f2d632de0316",
"assets/assets/articles/smooth%2520scrolling%2520in%2520reactjs.png": "6e78200ec0ccc15caafe4565cae851a9",
"assets/assets/articles/todo%2520list%2520app%2520built%2520using%2520react%2520redux%2520and%2520framer%2520motion.png": "1b5cc1d0be682c1606743013014aeb8c",
"assets/assets/articles/What%2520is%2520higher%2520order%2520component%2520in%2520React.jpg": "aedd6bdbd3b7bfa44432491c7638b78d",
"assets/assets/articles/What%2520is%2520Redux%2520with%2520easy%2520explanation.png": "f5075133ae44e3e0e3027127165f0e6f",
"assets/assets/articles/form%2520validation%2520in%2520reactjs%2520using%2520custom%2520react%2520hook.png": "d891109107dda42286b3dba2fd04d83d",
"assets/assets/articles/pagination%2520component%2520in%2520reactjs.jpg": "b91ad4ca3b497647ed5362c56cfcbf37",
"assets/assets/articles/create%2520loading%2520screen%2520in%2520react%2520js.jpg": "a698de11194bb7f5d48811af9b18880d",
"assets/assets/articles/create%2520modal%2520component%2520in%2520react%2520using%2520react%2520portals.png": "cb7838eee0b5c460977ba85a1f6be99a",
"assets/assets/svgs/dribbble-icon.svg": "7f7d9981ea6aee3abee44ca2cdbac91c",
"assets/assets/svgs/CircularText.svg": "9ddc6ef7b8e101534af7eaa7267ceec9",
"assets/assets/svgs/pinterest.svg": "31510c66bf3dbe35db9a2c6246dfffa7",
"assets/assets/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg": "7c4d78befaaabc5176171e49167508ee",
"assets/assets/svgs/linkedin%2520copy.svg": "2bed3a91c77bbf32fcf9f42562811d21",
"assets/assets/svgs/logo-github.svg": "3e505ff8004ef104eca825d0cc263a89",
"assets/assets/svgs/external-link.svg": "f7f13bcfe76247bd8e1cc8b48f96c4af",
"assets/assets/svgs/linkedin.svg": "2bed3a91c77bbf32fcf9f42562811d21",
"assets/assets/svgs/twitter.svg": "40994f38eddf3440a55364c3e5303412",
"assets/assets/svgs/moon-filled-to-sunny-filled-loop-transition.svg": "ebbe8dc0fcadd6886f58e615c6c1d7ea",
"assets/assets/svgs/miscellaneous_icons_1.svg": "94404a33ea6b7be9b9ddfb1273c113e1",
"assets/assets/Muhammad%2520Riaz%2520CV.pdf": "09c95aef5d135af3949e95111b830161",
"assets/assets/profile/developer-pic-1.png": "10d5ef459373c748f2f40cb47e0c0248",
"assets/assets/profile/developer-pic-2.jpg": "c7e00b313d96b87a230737036b4727a8",
"assets/assets/logo.png": "7df39aa1680bbb336d0b6ea6226b7e15",
"assets/assets/circular-text.png": "2dd75d125938460fee571cb7477bd2e8",
"assets/assets/cb.png": "d77bf719f243f3bd879c3fd02567ce6f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
