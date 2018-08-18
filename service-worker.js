/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "19fc20843438ed0cadff9c00a8933371"
  },
  {
    "url": "assets/css/0.styles.6b009dd6.css",
    "revision": "720da11a5a23e4bf3cf6f01ce3f5f67a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c3383b44.js",
    "revision": "dd82c5cfd35c0cbf2da8abddf4d7de5b"
  },
  {
    "url": "assets/js/10.1bbda6ca.js",
    "revision": "77b40232b63ea46fc5ff3291c207a8b9"
  },
  {
    "url": "assets/js/11.c2622e87.js",
    "revision": "113a56dc654b13477db03542aa4dec22"
  },
  {
    "url": "assets/js/12.460e5654.js",
    "revision": "eef7dd0ae30d642f4ad18c84423af2e1"
  },
  {
    "url": "assets/js/13.3225a4d9.js",
    "revision": "ae0fea59c504e5743610c192bad57a37"
  },
  {
    "url": "assets/js/14.f6acbb5a.js",
    "revision": "d0bec533faf6e63f6db5be5c7a0015e8"
  },
  {
    "url": "assets/js/15.5886e1c0.js",
    "revision": "24c20903dd15204b87de4791eb432465"
  },
  {
    "url": "assets/js/16.fd8b7718.js",
    "revision": "b4f8bc695c1fa04e51f5086e3eda219a"
  },
  {
    "url": "assets/js/17.c22ad29b.js",
    "revision": "2c6782931fc63b0bfda1037b0c7ed0a8"
  },
  {
    "url": "assets/js/18.5bf2498e.js",
    "revision": "220892a4fa1ceb7f9a9616ba4e8ecf78"
  },
  {
    "url": "assets/js/19.35a81267.js",
    "revision": "11e3a053e27128a006bf3727ed256e48"
  },
  {
    "url": "assets/js/2.43eeff0c.js",
    "revision": "ad82c305d79a8fb241fee0123ac6d2b0"
  },
  {
    "url": "assets/js/20.0c1ebab6.js",
    "revision": "d008dbc81376b500a67a5e29464ef363"
  },
  {
    "url": "assets/js/21.99ec4df2.js",
    "revision": "57bbe9b66f210f14b3f1fd9878e90bb8"
  },
  {
    "url": "assets/js/22.ce260bf9.js",
    "revision": "742b8a22c8ed2786ceeeed12176ed1c9"
  },
  {
    "url": "assets/js/23.0b790e30.js",
    "revision": "5892a7031c8f714e42d678a7e9b1cfc1"
  },
  {
    "url": "assets/js/24.65ee781f.js",
    "revision": "577d861691b3a80e72e376d7e5b577d3"
  },
  {
    "url": "assets/js/25.5ed57a61.js",
    "revision": "ee11bd6c69b0e60bad2415af5abc5fba"
  },
  {
    "url": "assets/js/26.c605354a.js",
    "revision": "2a1c4ad50b0caefefa79bdefe03a0afc"
  },
  {
    "url": "assets/js/27.553998f9.js",
    "revision": "ac1b6da4d6448780c23ef97a7dee1808"
  },
  {
    "url": "assets/js/28.b8e16137.js",
    "revision": "5646d9c4037df17fd584367319978063"
  },
  {
    "url": "assets/js/29.ee6ef899.js",
    "revision": "9985dda7a9ead86bfd02eeedebf722cd"
  },
  {
    "url": "assets/js/3.fe9b0ecd.js",
    "revision": "eba3c39499202b81394b6f424022707d"
  },
  {
    "url": "assets/js/30.3c769b4a.js",
    "revision": "418adef589e751d3577a708b6241f833"
  },
  {
    "url": "assets/js/4.42321bed.js",
    "revision": "f1d9f9b0e917ba3a5ed9c70969baf2ea"
  },
  {
    "url": "assets/js/5.4625a07a.js",
    "revision": "46d80b0956b3a776cfb16384d99b67cf"
  },
  {
    "url": "assets/js/6.77ef9d57.js",
    "revision": "48b853f58399aad98d7318c86b58e001"
  },
  {
    "url": "assets/js/7.a58a8771.js",
    "revision": "7f03772d43316741ba3ad2710223ba73"
  },
  {
    "url": "assets/js/8.60f9a3d1.js",
    "revision": "00655aebddb73ccced3f9949a50babe3"
  },
  {
    "url": "assets/js/9.da57fd43.js",
    "revision": "95d2c2faa26ba519aa11b48f55e3a4d9"
  },
  {
    "url": "assets/js/app.4aae98a0.js",
    "revision": "1aa17d1f129e3a71d74341b254dadafc"
  },
  {
    "url": "config/index.html",
    "revision": "aa2e3f656236c18a5d269e5d1020e814"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "b40492d2af4c7e3ad4e7a28d36350d03"
  },
  {
    "url": "guide/assets.html",
    "revision": "411bccbe23f5324c7271f0a84dd51226"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "fe25bc62d3bfd4ec5955dcfb22513cc0"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "e1dcebcc928906039ef220b3a85a098e"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ec4e0600e3b7e9d3d523f6eb683b38ab"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fd182c7f0cfc77ad893c82f4a4c726be"
  },
  {
    "url": "guide/i18n.html",
    "revision": "1597a34271edae35bc4aad9145918006"
  },
  {
    "url": "guide/index.html",
    "revision": "156417b42ea4785a30d5927e4c14c1ae"
  },
  {
    "url": "guide/markdown.html",
    "revision": "6c9c68a00e6c1c4762bbf3454e5e2f0c"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "12f92f50eb8efbe84de34e3de522c7d2"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "f17dbb6956a0044362b4f283975b220e"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "a7b312a4cb608ee63204156ddb308157"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "6e3a71479f87af7524f6b7d326172645"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "cdd6cb7c27651403d07bc23383ffd4a0"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "cf1ba5bbb61fa37562696532ac2ffcfc"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "aab35a40194d42c8291438d6910e9a37"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "e78c4c54b8910ede975b636745e52f21"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7e1a861bc2ec2c612ac18a32360b255d"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "e4d8a7e81310a2b6807a7fc688bc7bf2"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9e2729ad6f5c5b211c1715c653f3f92d"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "ba3cb8377b0ea70c26e207ecb0518343"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "6ea6127be778c8595ade729cf4f2fe28"
  },
  {
    "url": "zh/index.html",
    "revision": "730b36d5bef0650a145baf7ba6008a67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
