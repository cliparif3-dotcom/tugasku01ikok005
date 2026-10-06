// TUGASKU - service worker: bisa dipasang di layar utama dan tetap terbuka saat offline.
// Halaman selalu diambil dari internet dulu (supaya update langsung terlihat); salinan tersimpan dipakai kalau offline.
// Data dari Google Sheets dan Apps Script tidak disimpan di sini (data terakhir disimpan oleh website sendiri).
const V = 'tugasku-v1';
const FILES = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V)
    .then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  if (new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(r).then(res => {
      const salinan = res.clone();
      caches.open(V).then(c => c.put(r, salinan));
      return res;
    }).catch(() => caches.match(r).then(m => m || caches.match('index.html')))
  );
});
