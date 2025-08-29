const CACHE_NAME = 'roteiroba-v37';

const urlsToCache = [
// ARQUIVOS GERAIS
  '/',
  'style.css',
  'manifest.json',
  'script.js',
  'imagens/icone180.png',
  'imagens/icone192.png',

// DIAS DO ROTEIRO
  'index.html',
  'dia2.html',
  'dia3.html',
  'dia4.html',
  'todos.html',
// IMAGENS
// DIA 1
  'imagens/img1/carrefour.jpg',
  'imagens/img1/serrano.jpeg',
// DIA 2
  'imagens/img2/chinatown.jpeg',
  'imagens/img2/distritoarcos.jpeg',
  'imagens/img2/tigre.jpeg',
  'imagens/img2/uptown.jpeg',
// DIA 3
  'imagens/img3/callearroyo.webp',
  'imagens/img3/colon.jpeg',
  'imagens/img3/congresso.jpeg',
  'imagens/img3/florida.jpeg',
  'imagens/img3/galerias.jpeg',
  'imagens/img3/livraria.jpeg',
  'imagens/img3/obelisco.jpg',
  'imagens/img3/olympo.jpeg',
  'imagens/img3/rooftop.jpeg',
  'imagens/img3/rosada.jpeg',
// DIA 4
  'imagens/img4/arcosdelrosedal.jpeg',
  'imagens/img4/botanico.jpeg',
  'imagens/img4/centrorecoleta.jpeg',
  'imagens/img4/ecoparque.jpeg',
  'imagens/img4/floralis.jpeg',,
  'imagens/img4/japones.jpeg',
  'imagens/img4/planetario.jpeg',
  'imagens/img4/purgatorio.jpeg',
];



// INSTALACAO DO SERVICE WORKER 
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});



// BUSCA NO CACHE
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});



// LIMPEZA DE CACHE
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Limpeza do cache antigo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});