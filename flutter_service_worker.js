'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0e67ced4802633ead0f24728ffae90a0",
".git/config": "a2c800161be4175e97b75dfb7d0c6cd5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5360a4a90a6f72696b88cc6e546e1edf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "37c8a834969649a3fdfe663f1f849da3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56f858e1105a201ef915f8c2832254fd",
".git/logs/refs/heads/main": "1374bb0d69d2f77f69fac5f08e0ad8ce",
".git/logs/refs/remotes/origin/main": "b2e723bebd4f0326a474a1b6c1be1271",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/98bc2284e7ea8601de2a9f1a9d6b07ed46676c": "7cdc1a18a39b402a28e032a69cf07299",
".git/objects/05/37a26b868c1d5dfb1bb11804eec85fa67c935f": "f3a3ff87b4a4580703b486cc21aa0ec9",
".git/objects/08/51861724afa76d8c88952d03b030beab73434b": "ceeca08ab7a6e7dac02361f2027cca35",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/4f5b223bfd1ca4e52dca119c92855d6a3cb901": "d0f4cab44a91dda6eb61e661bafa20c8",
".git/objects/1a/a7d0605a2b2a66cfde027a8335fe2ae367df97": "8fe64b0da0e9bba404f7292ddc5094b1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a9fab1e40733848e0777ae6fcb35ebb8e490f1": "10cab4197287ae28bf8377442bc5ab1c",
".git/objects/24/420de3d7d949c1de66e487d3200417e1fbe3a6": "cd8fd7c0ca3d839359c3bc4631b52732",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/2114dc0962ceb04acd6ae2314f10a8beeb9928": "8dfafa9090a4e171d570c7a06158fa53",
".git/objects/33/efca3b190bf21de7f7f65139013d1d5d1debed": "2ce0c96102b1b161bb096a774803e979",
".git/objects/3a/1cf17b1eef76db16d7d522ca99706bdcd036a3": "5b35b11942385e28bae855235df5b198",
".git/objects/3d/7c0c18365e489aea07a8c5bf0f08e98b49f304": "dbeb5c83de4a03a72b59223e051066a5",
".git/objects/3e/589e58631d3f0d7fa6275076a87159f889119b": "996fe2971d9b970b5af3fc2d4f9c274f",
".git/objects/41/fed4050b61c258648e9da6cc086eea2525e527": "56e72664add7595ef719b3e047520718",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2df2ba984d961980470a772d7b2fa2f421907d": "422a16d7698b6e351e794ffe8de4de54",
".git/objects/5c/7c93868f5ef78b473533b98ebc18336fa767c6": "5b97d22ea1bc3ee8b1b1b1d034abf164",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/60/b65b282d76db1e80f3a05ce2afd9d5475c8c6a": "c262e234a4433e07bd930957c354efab",
".git/objects/62/0fb061d4ebf3d334721f7c0109e21749d65f88": "c5bc9c3da297de043f21e7da6368c432",
".git/objects/67/7f3ceebd3ea23a0640596b2b475ea9cfc39ec5": "af7118a9c7109608a5ebbfdb84513efc",
".git/objects/68/7a3aa6f770db48e49c6831854d9168389af7b0": "2d28eb726752e21fe8a357996816137d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6e/5cd4d729721d518dddbabb28e0806299585d32": "f567ef5c576aae526b7b7b659fcc8707",
".git/objects/72/5be98b08f680094fc3b000fd2419362595d2a5": "4ff841756ef905980b9f471abf53bba8",
".git/objects/73/24dce1c573800dfa4a7619c01b155212bbc3bd": "c328b0e0b4c4b9e9e3e41394d18e3a31",
".git/objects/75/db5f5db518f11c0765c78a15d3fcc0395bcbb4": "5bb81804d3bde9bebe5236c1d6290e8d",
".git/objects/78/2a80091d1562b2581ea7a7b6f66e899dad7ca6": "24526a0e7fd9dc0f0ef80ee438e1707f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/abbc1ed0a20dd4bd31839f65d3817e359a3467": "42344eb00cd290af8157b864e4bcd430",
".git/objects/92/fed858e9b0d9025775ee8bbb360630e0a2f9c9": "23ae9b99e6a53987b9dbd69bb8b4e03d",
".git/objects/94/d2ccdc2040760b786a4d91280b3477852c5b7d": "370f4f27dc06e446bac64a0ee9de86f1",
".git/objects/97/3d5238acd835a4a5d6044a7685bcf9d52c172f": "1afa091a5f269ba321ee67a47c5e72b9",
".git/objects/9c/2917e441a1450c61798eefb67c53a272053f52": "82d1425c3a63c53da7e7e2bf4c9021c4",
".git/objects/9c/67948899fe5e3c4e448af3ad5715eceb0d8c4c": "6448e4ddabd0d734c417712ded0de599",
".git/objects/a3/3ca7dd0186fc0d828abbde221e31796b29e5c0": "b2ae01134036e8bfaadfdc7b17fe5a6d",
".git/objects/af/2e7d0fb00bb3b04316910c4143e38eebb8b631": "106af81141d7f904fcc6dc8893a247ca",
".git/objects/af/54fd69fef9daa0dd0e8dfa94cadd8ea59a86db": "49f73196728b099422ba5b87ace038ab",
".git/objects/b5/0f54eb21117ff623f512eb00c7bced1d74373e": "715871690c2d1653df33cc0499db53ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/c313a90bc3dac3184f0a8f06f862c724eb0c27": "7c15e3d8f932c8340fb21237584c239e",
".git/objects/c0/df7c9b59cd51adf6a9fc368bbddc831dc217f8": "9aa1b9879e55be1edfc39b014797336e",
".git/objects/c5/35d2b2655015a5e1325dba64e0198dfe48da40": "c9ef013d64648d7a8e09704acc65c09e",
".git/objects/cc/ae4de9a0a032f6703a86ed8da93870332040d2": "10d7e3e2eafbada571a4571a09392892",
".git/objects/d1/417619006af637b8f45b5c598bcdf5634ba3ca": "afa560ef8f8174b083a311a636aa6734",
".git/objects/d2/05a4794204529cf84c24808c4932fe1f11a8b6": "34f8a5a7df6b2d5e38724bfe4c2404eb",
".git/objects/d3/e952f0b81e433291f993f50963bc1786a8aa80": "207a3c030e1b54596bbb7e37818e6973",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/9993d1f9262f0c0713bd70e58708f3983d2021": "77f80b877559d1bc3e97e6f57a709a38",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fb/5308369b8d846df8937cecb72371b269663af7": "5e2b663e0a9937008b51c9e00ec3bf07",
".git/objects/fe/294f7311d51dbc0ba3304d2567de0799fd243d": "184412d3af6b4bb91888d9e309f1f6da",
".git/refs/heads/main": "ec678d560be69909f32cc6c8cb9f68c2",
".git/refs/remotes/origin/main": "ec678d560be69909f32cc6c8cb9f68c2",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8e6c5ab19fcdc6972e601ab6adc0d750",
"assets/NOTICES": "3ad1877a70ebf90e8066542203045a9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "acee1fc405bef5482902aa79bd006720",
"canvaskit/canvaskit.wasm": "5daaa34f7326f78e5a086b6a94650aad",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "477db11e57529dd3694a09dfc541b38f",
"canvaskit/chromium/canvaskit.wasm": "c67d5c2b81dac73d9308a24d75f3ca2a",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "44c69c7a5600e60f2032b379ccda0f67",
"canvaskit/skwasm.wasm": "6aad4575b95f11b24c6a09f039e453f2",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "7d24cf6507fed69d18dc13b3a1da4cf0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1db571a8e16bfa91f4b7b71a1c8ad3be",
"/": "1db571a8e16bfa91f4b7b71a1c8ad3be",
"main.dart.js": "503d92e79bf4bd6aa0f5105e2c98baf7",
"manifest.json": "f42e8d5639d95f832e2af66c11fec80b",
"version.json": "24c1e21a093c4d010dc9c0b47a772ca1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
