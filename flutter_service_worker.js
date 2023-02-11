'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1c37d58b2ea925f1a87e641b5a015669",
".git/config": "37502d4fcff3e40021ece07663da9086",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "96dd9e2b0f69a75dce0ed65f271c400c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "334eaf45f879544a28e3885ddebbc6fd",
".git/logs/refs/heads/master": "334eaf45f879544a28e3885ddebbc6fd",
".git/logs/refs/remotes/origin/master": "bb924c97dc240360b7a36e9a4919d50c",
".git/objects/05/f06c688228a61a14344a6886b6b938dcd1d74e": "87ee26f6334e6be923eaebd6e3120fa5",
".git/objects/06/565fd00b17ce5e93179ef540a5c263ce519d23": "f594dfdae6fc86c95b7502768ba75ae3",
".git/objects/0f/8dc772089f38f741427b7805a34895154f0d5a": "8fa1be5864d63db5fd587832f4caeee2",
".git/objects/11/445a720cdeac4a21d5fcbf2506b7f96d056344": "ad3f31ba95c649c55a6950c7394d6396",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/0c2a60cb7a146a99db1294c4bb65560a403964": "d5abca77eade7ba255bb1e965c204fd9",
".git/objects/13/3eea3a94e0db82dd4c54080d480a6f19073b24": "bb55d7e77043d524b162641bc93c69bc",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/19/b35ccc1d86d62f447dc3c642f84892a23c95d0": "d14ad1c6642c5fc82a3cc3b4ecf04e7e",
".git/objects/1a/003225225ccb4c8ac15bad9d363d5bea9d8aba": "805d3c1f7c5565b44ddacbe721f3c317",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/4bcea28aeb1a4bcebedc50df52441f10d2cfa3": "9c69e39de987f2ce7c19e736e37bb33c",
".git/objects/24/16752050304bd9adcabc28effe81dd8cad163b": "527a6c524400ac1aa1da19fd84a55568",
".git/objects/27/96cf7f2aba7b6309188a2aa58365dd87d35fc6": "83f6104d7888cc37608cf74ad9a11ccd",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/922075d7e37d1ba182f3473647e173f20a1698": "c504b2e0cb091bf4d95c498ac8d99484",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/920c42916f86d6de455966fcaef862a90799ed": "1a44f7522f133bbda0b8e691dd408607",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/0e82840e7b2fb675534915d2806abad2da9d00": "774dae5d4b3142911a2d554fd06d195d",
".git/objects/4c/013310aabbf7c5f8842c15e720a80dc73a75f9": "123ece438636553823ed44525f783f21",
".git/objects/4d/384d0c21cd0000446171a276c45858ca6547f0": "4fd2fee2a09eed8b5ecff42df84a7d03",
".git/objects/54/e9aaa8e564c56896b9cccdeebde562307b3bdc": "8225ec0519c05dc189255c6e22f4f75a",
".git/objects/56/616d32301201cb03222fa2cb8a47a03ac66039": "acaf1143031c39820fd25f4cb8575753",
".git/objects/56/9ac70de3979b1fa794a6211bdf556cb609f8e7": "ab6141569f23f9c87cd31f14d5f66fb0",
".git/objects/5c/159799c3aa40373116b05f1a67230bf3311fcc": "54d1647bdef86016bd60fab659a2175e",
".git/objects/5d/349a98ded6c69f2218f88390130610b3fa7ff2": "abb79c8d80469e0cc5ad12b8af1acb8d",
".git/objects/5d/3568a4671f180090807cb4ade2a6e87e013ebd": "bb0f43e75353ac7953fd7e4ddda54593",
".git/objects/62/4cfb1a0df17eadc961f96013aa12ae9a897a00": "224b4638942e275bb6dde4bbe9d83b07",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6d/2336f8c9212a356f8bf1724aaaffc48cde6e4f": "9681441d9e02f22e9be9272f74d78b03",
".git/objects/78/af1db9f744d5e366dabf443316c50373fd03c1": "b5d502ed461b3532a991219aa3441825",
".git/objects/79/5bf374a220dbf805d819217790a1a4584771c8": "47c32787a0cc3ebb7bfb82bc62616526",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/df9a4bc8f632eae43558cb4db77c94e4c75349": "08e479b6925f4c8e805a646159310bee",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/1ee4de4e42d7977f0412df0c829c864d8a5c41": "57fc67bc585ac1ae24b175fbc87da123",
".git/objects/87/f6119d2eacde8a1a5501b7170af8f3416712d4": "7cdd5bb08e2c16d56f6b5ba15efc4c81",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/ecc0a4be37a28fa776d832cd7828932d190662": "66abde3f40816f4ab02f84950a6e56ae",
".git/objects/95/5829d989f7cd18539521e5a646a1d970ee4a52": "1ceb7452c7ac8b06d424ecc2dbf13907",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/018e613f5c13194adf981121c14a8d0fc1f17e": "d4771c82265c18d6a5b29f82f4928df1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/7ac1805c9f2e8b68b5a2d65768d8de6b85f193": "669c117ca78eb5a915d3cb74f8925201",
".git/objects/a7/e0ad9196c393657d2a9a721aadd2ecb55a0868": "7695834d47616a64573a5e7d56002bd8",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/286610a6dd207ee36de260727714c1760532ba": "5228d5e86164373a743885f6d5749859",
".git/objects/b2/760728b1dde260f8428c7dc8d0540aa1ff7921": "ed6acd892d586d2ae5ec54accfc6219f",
".git/objects/b5/7c6ab7a83b6dc09ab1f390ec69f9d65ce02751": "46f4c70a639dd3685a86daf032ec63aa",
".git/objects/b8/b1fd853a50c32537415f6dac091303d1dbc29e": "e589de84155332b361304941f3d1d1a0",
".git/objects/be/51e436aecd95d35618c8600e6ca467263f4d65": "7f49d3525f24ba6f8f64979195c62af4",
".git/objects/c7/2f42d0c55a9bd6f7988d5d300d930c6764f3eb": "94c2c6d8a935bc067387bfc7a65d0f8a",
".git/objects/cb/c21ecaffd02f2786cb0e2f62eadd26eba096d5": "b81e93a968d090e878256e00bba4e00e",
".git/objects/cb/c8935ce7f97c70080f26b7df152c83f170bc46": "855b022c0442c1969956e994d64d0439",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/dd/e8f76c12c3e78cdba77b1d238491d9d15fd001": "d6623a699fdb662a8f0e090daeec3b3b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/fa632864f271fa92eb2bff8be1264a76fc739f": "f3f6abf29d002902c4b32b0c9076e0b3",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/ffa30157c90895b45310ba4210675b389d02f0": "139ce0f4978c848ee50960ec26a1d64f",
".git/objects/e1/07da8e4e7a259a740efe6a1e0614a85fbd914e": "b70586af58230a4058bcadb6d4bef0ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/fd123af7fb5728800a5d8ba450bb96a960c603": "9ecdcbb93af8e0ee1375827be8156888",
".git/objects/f0/36e1b2033c02f98e44ff74d0507380c8ef21e3": "dba3e51e15d6f7746f9bf7f4226d6d84",
".git/objects/f3/f3cc82a94ac1e2bfe0a42b3e22611137c5a521": "5fa2ad001e939ebc64740248cee736e0",
".git/objects/f6/a75b086dfc3bb6de4d021755c05754dcee4fa5": "b9a8e7ec2bebfdcbdf909bbf2d571d40",
".git/refs/heads/master": "d0162a78ed0e706cfc101567d4796be6",
".git/refs/remotes/origin/master": "d0162a78ed0e706cfc101567d4796be6",
"assets/AssetManifest.json": "b477f8be8b2ff35dec55ead64f1f3c50",
"assets/assets/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
"assets/assets/animation.gif": "3c61734e7bd00a017ff3b8f3c01d7e96",
"assets/assets/bullet.png": "10d200ad5e892b5de4aa4baa087f0d2c",
"assets/assets/curly.png": "d146f21425819cfa3e86e05a62e0f364",
"assets/assets/demovideo1thumb.png": "ffba4a93fe7455b4a9dea52dc8990c70",
"assets/assets/filter.png": "9074e65aae7a83cb965e2e920196250f",
"assets/assets/flutter3dp.png": "bbe200a8fb8cedc951688ae345855fe2",
"assets/assets/flutterlogo.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/git.png": "4f71e21c699d933c41010a40f2ea3fea",
"assets/assets/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/gradient.png": "a2e66b804bc2e6d9f2f72de16428e480",
"assets/assets/gradientAnim.gif": "8eaafbc16c56e3724d09de01e98e3697",
"assets/assets/linkedin.png": "9449e52f97bb9b80a2e560d6339805f5",
"assets/assets/loading.gif": "f842e82a10bab3222ee88c3b16a5dfb5",
"assets/assets/loadinganimnobg.gif": "236d689f90e506cb19eedae4af39d6f5",
"assets/assets/man1.webp": "a83469ba50fa748e675a778c0fd8c37b",
"assets/assets/menu.png": "348605d24aa688bac0f7fd381b326648",
"assets/assets/nature.jpg": "7164eb969b59913277ab196795886f86",
"assets/assets/notes.png": "b638a4773e56aa0fdf3e3db9aa933fbe",
"assets/assets/paint.png": "b8d57b50ce9385c8cd6b3dc3a0f2807e",
"assets/assets/paste1.png": "69c8986ff8043fd948cf62f4d1842433",
"assets/assets/playstore.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/share.png": "3c51e619ef54c9a858463713d135865c",
"assets/assets/signout.png": "5e7897e17163218d5e6c4403dcd67720",
"assets/assets/starr.png": "c3d53b19c9875d47459f6a83da459aaf",
"assets/assets/theme.png": "2497f2d0bec1243f435fb3cea439417d",
"assets/assets/webapp.png": "0293c74f9fc9bd0dc64da0ed598fd0de",
"assets/assets/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loadinganim.gif": "aa5666d4be63b0aefa281e648f14cdcc",
"assets/NOTICES": "ec1639e66cb322403adc254bb802d2b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "f482deef5d3260cff4e7e6db592d8569",
"icons/android-chrome-512x512.png": "04319a9ea7da39e3a22db652e75537ec",
"icons/apple-touch-icon.png": "1bb0b7c516dede33bbcf8acb6eb8f3e0",
"index.html": "94fd9aaf64251d71c968ec5f27aa1290",
"/": "94fd9aaf64251d71c968ec5f27aa1290",
"logo.png": "f482deef5d3260cff4e7e6db592d8569",
"main.dart.js": "448e24e463b55c9aa013faceece0ed8c",
"manifest.json": "5fc1c07c2848a31ae7c02065d961f4ed",
"version.json": "ce993114e037892127826ede934a4632"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
