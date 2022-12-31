'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "819f66e43c2207672a60cb4b2ff4dd70",
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
".git/index": "f80d66f1899a2c95a968f2e04b6c7622",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56b389c403c38a79a145bb9a61990aac",
".git/logs/refs/heads/master": "56b389c403c38a79a145bb9a61990aac",
".git/logs/refs/remotes/origin/master": "f5a1bf7c0f66404617695b0196ebb0a2",
".git/objects/05/5788240b095728d9f3da20072bfbea00807ab0": "e0b23681548ddb43394b417fc8cfce23",
".git/objects/06/565fd00b17ce5e93179ef540a5c263ce519d23": "f594dfdae6fc86c95b7502768ba75ae3",
".git/objects/07/39c2d2ce54b8113acdda9f1278c0516280f27b": "8039d949ab04d94fff37df90020c5ffe",
".git/objects/0f/8dc772089f38f741427b7805a34895154f0d5a": "8fa1be5864d63db5fd587832f4caeee2",
".git/objects/11/445a720cdeac4a21d5fcbf2506b7f96d056344": "ad3f31ba95c649c55a6950c7394d6396",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/0c2a60cb7a146a99db1294c4bb65560a403964": "d5abca77eade7ba255bb1e965c204fd9",
".git/objects/13/3eea3a94e0db82dd4c54080d480a6f19073b24": "bb55d7e77043d524b162641bc93c69bc",
".git/objects/19/b35ccc1d86d62f447dc3c642f84892a23c95d0": "d14ad1c6642c5fc82a3cc3b4ecf04e7e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/4bcea28aeb1a4bcebedc50df52441f10d2cfa3": "9c69e39de987f2ce7c19e736e37bb33c",
".git/objects/24/16752050304bd9adcabc28effe81dd8cad163b": "527a6c524400ac1aa1da19fd84a55568",
".git/objects/27/96cf7f2aba7b6309188a2aa58365dd87d35fc6": "83f6104d7888cc37608cf74ad9a11ccd",
".git/objects/2b/1f6820ccce0c1be6207dc3c1fdf1da9649b440": "c494c723928cf40219dd70905f27e868",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/68dc3aa3e48128cb66b0d6d6404fe04045549c": "7f3f020f451c2667db38b9491a20d434",
".git/objects/38/443c62496e478df8cffd34d978b8c939643e4e": "290f9f0279af319fd5a66e7f482c0595",
".git/objects/39/d69c914b442730bed626feed59977658fa4c8c": "0d09d377a44ec6e7e12a382e823c6189",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/1d452bdc533a77990c59114517664396e068c8": "4212193389ee12d915d85ba3710c12b9",
".git/objects/42/c1f0e2ef259718d6a4ed810c87c85cd3dcaba5": "aa3cc32108b582fcc3e67459b048583d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ce08cadb012463012114411474055a49ba1ec6": "c58a33265aa0fbd9dad40114602cf5b8",
".git/objects/4a/db592cdd8271a4f338ebe29a9cf7b8def32490": "b13af627b5d115b648372771d4a38fa9",
".git/objects/4b/c6d2c9e12605b1edefed9a0816a5b12a74a859": "d5ff3d49ada2060347f789116f4ff55e",
".git/objects/4d/384d0c21cd0000446171a276c45858ca6547f0": "4fd2fee2a09eed8b5ecff42df84a7d03",
".git/objects/54/e9aaa8e564c56896b9cccdeebde562307b3bdc": "8225ec0519c05dc189255c6e22f4f75a",
".git/objects/56/9ac70de3979b1fa794a6211bdf556cb609f8e7": "ab6141569f23f9c87cd31f14d5f66fb0",
".git/objects/56/f055d46e68d0f2f450c619d58f196f9f83d7c8": "64882f229aef8de20ec488d49570b710",
".git/objects/58/bcb57a290c52451341c7f44b8a3a9e9f578987": "0e42d8d6b19ee23f994f633452365f7a",
".git/objects/5c/159799c3aa40373116b05f1a67230bf3311fcc": "54d1647bdef86016bd60fab659a2175e",
".git/objects/5d/3568a4671f180090807cb4ade2a6e87e013ebd": "bb0f43e75353ac7953fd7e4ddda54593",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/69/26f3ddc6bd431740279bb7308b26d9329815b1": "d8b6105f475d5d46a6c1b55fb753efec",
".git/objects/6d/2336f8c9212a356f8bf1724aaaffc48cde6e4f": "9681441d9e02f22e9be9272f74d78b03",
".git/objects/73/9017212050dd7d1e960af8fbd1f57c3d1f22d9": "ef469b93125eb47879600ca100687971",
".git/objects/78/af1db9f744d5e366dabf443316c50373fd03c1": "b5d502ed461b3532a991219aa3441825",
".git/objects/79/5bf374a220dbf805d819217790a1a4584771c8": "47c32787a0cc3ebb7bfb82bc62616526",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/e6244530e637a6bd53997f4abce6e4c496309c": "ccdc0f59f089c68dec01858985de190a",
".git/objects/95/5829d989f7cd18539521e5a646a1d970ee4a52": "1ceb7452c7ac8b06d424ecc2dbf13907",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/018e613f5c13194adf981121c14a8d0fc1f17e": "d4771c82265c18d6a5b29f82f4928df1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9f59b23b7ba438dc2740ae945733d2312342bd": "0d79670b28e06d713eeca2614c16e9c9",
".git/objects/a3/7ac1805c9f2e8b68b5a2d65768d8de6b85f193": "669c117ca78eb5a915d3cb74f8925201",
".git/objects/a7/e0ad9196c393657d2a9a721aadd2ecb55a0868": "7695834d47616a64573a5e7d56002bd8",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/ac/95f8a7c0edf506212144bced0e4b286b34aeb0": "a223654dcb7a357bdb422126683428b8",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/af/068ba128abef35630ab248bc846c735fe67e76": "9f10c254ed607fa5a828121db4389260",
".git/objects/b2/760728b1dde260f8428c7dc8d0540aa1ff7921": "ed6acd892d586d2ae5ec54accfc6219f",
".git/objects/b3/4f967a1dc8bccb9e147fbafc09c153afc52e58": "9ecfcd397783c8775a29ed6ed35437a4",
".git/objects/b3/aaae2683204bf74d2b3f2012562b6825782e30": "06f36774f70c66c5c5222386ffaa2e53",
".git/objects/b5/7c6ab7a83b6dc09ab1f390ec69f9d65ce02751": "46f4c70a639dd3685a86daf032ec63aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b1fd853a50c32537415f6dac091303d1dbc29e": "e589de84155332b361304941f3d1d1a0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/b144c04e082cb2fa5505fbbddc94e39a6c4cce": "cef74c543511698f3a10b71e84a652d8",
".git/objects/cb/c8935ce7f97c70080f26b7df152c83f170bc46": "855b022c0442c1969956e994d64d0439",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/e78bae41ea514d9b2f77e0ade1939a54612c3d": "f759ca219f64a6364926ee474b065078",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dc5f7273af3fe846ab6599a0cc52acde0a1e90": "777c9feea5d993f9bac0c1549ff466ed",
".git/objects/dd/e8f76c12c3e78cdba77b1d238491d9d15fd001": "d6623a699fdb662a8f0e090daeec3b3b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/fd3ccffa41140be2a0be7be2b16dcf9431fb1e": "a1bb95aa9b17c6d305c1fbfeab7d3f4c",
".git/objects/e1/07da8e4e7a259a740efe6a1e0614a85fbd914e": "b70586af58230a4058bcadb6d4bef0ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/fd123af7fb5728800a5d8ba450bb96a960c603": "9ecdcbb93af8e0ee1375827be8156888",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/a0f8e459dafad4f723a430f1c8c9f9f7c11227": "524508786f799608dad133a54b0ca576",
".git/refs/heads/master": "ef5beb157e75583ffaaebab4896dc641",
".git/refs/remotes/origin/master": "ef5beb157e75583ffaaebab4896dc641",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "3c95c4d1278480afdc39e7f77f10f09d",
"assets/assets/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
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
"index.html": "fb7a9f7580124006589957e1b2a39e43",
"/": "fb7a9f7580124006589957e1b2a39e43",
"logo.png": "f482deef5d3260cff4e7e6db592d8569",
"main.dart.js": "13430e771155146688e18aead884d0f1",
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
