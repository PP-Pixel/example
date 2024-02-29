
// Service Worker のバージョンとキャッシュする App Shell を定義する

const NAME = 'アバス遺跡の謎';
const VERSION = '001';
const CACHE_NAME = NAME + VERSION;
const urlsToCache = [
  './index.html',
  './1/index.html',
  './2/index.html',
  './2/2/index.html',
  './3/index.html',
  './3/2/index.html',
  './3/3/index.html',
  './3/4/index.html',
  // './finish/index.html',
  // './finish/a/index.html',
  // './finish/b/index.html',
  // './finish/c/index.html',
  './1/1.js',
  './2/2.js',
  './2/2/2.js',
  './3/3.js',
  './3/2/3.js',
  './3/3/3.js',
  './3/4/3.js',
  // './finish/finish.js',
  // './finish/a/finish.js',
  // './finish/b/finish.js',
  // './finish/c/finish.js',
  './style.css',
  './1/style.css',
  './2/style.css',
  './2/2/style.css',
  './3/style.css',
  './3/2/style.css',
  './3/3/style.css',
  './3/4/style.css',
  './finish/style.css',
  './finish/a/style.css',
  './finish/b/style.css',
  './finish/c/style.css',
  './finish/style.css',
];

// Service Worker へファイルをインストール

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエストされたファイルが Service Worker にキャッシュされている場合
// キャッシュからレスポンスを返す

self.addEventListener('fetch', function (event) {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin')
    return;
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Cache Storage にキャッシュされているサービスワーカーのkeyに変更があった場合
// 新バージョンをインストール後、旧バージョンのキャッシュを削除する
// (このファイルでは CACHE_NAME をkeyの値とみなし、変更を検知している)

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!CACHE_NAME.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log(CACHE_NAME + "activated");
    })
  );
});

