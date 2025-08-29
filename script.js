document.addEventListener('DOMContentLoaded', () => {

//-----------------------------------------//
// 1. BANCO DE DADOS (INFORMAÇÕES DO SITE) //
//-----------------------------------------//

// LISTA DOS DIAS (MENU HAMBURGUER)
  const diasDoRoteiro = [
    { diaNum: 1, diaNome: 'Sábado', data: '19/07', link: 'index.html' },
    { diaNum: 2, diaNome: 'Domingo', data: '20/07', link: 'dia2.html' },
    { diaNum: 3, diaNome: 'Segunda', data: '21/07', link: 'dia3.html' },
    { diaNum: 4, diaNome: 'Terça', data: '22/07', link: 'dia4.html' }
  ];

// LISTA COM TODAS AS ATRAÇOES SEPARADAS PELOS DIAS 
  const atracoes = [
    // DIA 1
    { dia: 1, id: 'carrefour-express-palermo', bairro: 'palermo', imagem: 'imagens/img1/carrefour.jpg', nome: 'Carrefour Express', tipo: 'Mercado', valor: '$$$', funcionamento: 'Segunda a Sábado - 07:00 às 22:00 | Domingo - 11:00 às 20:00', localizacao: 'Palermo | Soler 4072', mapaLink: 'https://goo.gl/maps/example'},
    { dia: 1, id: 'serrano', bairro: 'palermo', imagem: 'imagens/img1/serrano.jpeg', nome: 'Plaza Serrano', tipo: 'Feirinha', valor: 'Gratuito', funcionamento: 'Sábado e Domingo', localizacao: 'Palermo', mapaLink: 'https://goo.gl/maps/example' },
    // DIA 2
    { dia: 2, id: 'tigre', bairro: 'tigre', imagem: 'imagens/img2/tigre.jpeg', nome: 'Tigre', tipo: 'Passeio', valor: 'Gratuito', funcionamento: 'Segunda a Sexta - 10:00 às 18:00 | Sábado e Domingo - 10:00 às 19:00', localizacao: 'Tigre', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 2, id: 'distrito-arcos', bairro: 'palermo', imagem: 'imagens/img2/distritoarcos.jpeg', nome: 'Distrito Arcos', tipo: 'Outlet', valor: 'Gratuito', funcionamento: 'Todos os dias - 10:00 às 22:00', localizacao: 'Palermo | Paraguay 4979', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 2, id: 'chinatown', bairro: 'belgrano', imagem: 'imagens/img2/chinatown.jpeg', nome: 'Chinatown', tipo: 'Passeio', valor: 'Gratuito', funcionamento: 'Todos os dias - 12:00 às 16:00 e 19:30 às 23:00', localizacao: 'Belgrano', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 2, id: 'uptown', bairro: 'palermo', imagem: 'imagens/img2/uptown.jpeg', nome: 'Uptown', tipo: 'Bar (Drinks e Petiscos) e Balada', valor: '$$$$', funcionamento: 'Todos os dias - 20:00 às 02:00', localizacao: 'Palermo | Arévalo 2030', mapaLink: 'https://goo.gl/maps/example' },
    // DIA 3
    { dia: 3, id: 'arroyo', bairro: 'recoleta', imagem: 'imagens/img3/callearroyo.webp', nome: 'Calle Arroyo', tipo: 'Café e passeio', valor: 'Gratuito', funcionamento: 'Todos os dias - 24h', localizacao: 'Recoleta', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 3, id: 'livraria', bairro: 'recoleta', imagem: 'imagens/img3/livraria.jpeg', nome: 'El Ateneo Grand Splendid', tipo: 'Livraria', valor: 'Entrada gratuita', funcionamento: 'Segunda a Sábado - 09:00 às 16:45 | Domingo - 12:00 às 21:00', localizacao: 'Recoleta | Av. Sta. Fe 1860', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 3, id: 'colon', bairro: 'centro', imagem: 'imagens/img3/colon.jpeg', nome: 'Teatro Colón', tipo: 'Teatro, atrações e visita guiada', valor: 'Pago', funcionamento: 'Todos os dias - 10:00 às 16:45', localizacao: 'Centro | Cerrito 628', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 3, id: 'obelisco', bairro: 'centro', imagem: 'imagens/img3/obelisco.jpg', nome: 'Obelisco', tipo: 'Monumento histórico', valor: 'Gratuito', funcionamento: 'Todos os dias - 24h', localizacao: 'Centro | Av. 9 de Julio', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 3, id: 'congresso', bairro: 'centro', imagem: 'imagens/img3/congresso.jpeg', nome: 'Congresso Nacional', tipo: 'Prédio histórico', valor: 'Gratuito', funcionamento: 'Todos os dias - 09:00 às 17:00', localizacao: 'Centro | Av. Entre Ríos 51', mapaLink: 'https://goo.gl/maps/example' }, 
    { dia: 3, id: 'rosada', bairro: 'centro', imagem: 'imagens/img3/rosada.jpeg', nome: 'Casa Rosada', tipo: 'Sede do governo', valor: 'Gratuito', funcionamento: 'Quarta a Domingo - 10:00 às 18:00', localizacao: 'Centro | Balcarce 78', mapaLink: 'https://goo.gl/maps/example' },  
    { dia: 3, id: 'florida', bairro: 'centro', imagem: 'imagens/img3/florida.jpeg', nome: 'Calle Florida', tipo: 'Rua comercial', valor: 'Gratuito', funcionamento: 'Todos os dias - 24h', localizacao: 'Centro | Florida 475', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 3, id: 'galerias', bairro: 'centro', imagem: 'imagens/img3/galerias.jpeg', nome: 'Galerias Pacífico', tipo: 'Shopping', valor: 'Gratuito', funcionamento: 'Todos os dias - 10:00 às 22:00', localizacao: 'Centro | Av. Córdoba 550', mapaLink: 'https://goo.gl/maps/example' },
    // DIA 4
    { dia: 4, id: 'centro-cultural-recoleta', bairro: 'recoleta', imagem: 'imagens/img4/centrorecoleta.jpeg', nome: 'Centro Cultural de Recoleta', tipo: 'Centro Cultural', valor: 'Gratuito', funcionamento: 'Terça a Domingo - 12:00 às 21:00', localizacao: 'Recoleta | Junín 1930', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'floralis-generica', bairro: 'recoleta', imagem: 'imagens/img4/floralis.jpeg', nome: 'Floralis Genérica', tipo: 'Monumento e Parque', valor: 'Gratuito', funcionamento: 'Todos os dias - 24 horas', localizacao: 'Recoleta | Av. Pres. Figueroa Alcorta 2301', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'jardim-japones', bairro: 'palermo', imagem: 'imagens/img4/japones.jpeg', nome: 'Jardim Japonês', tipo: 'Jardim e Parque', valor: 'R$63,00', funcionamento: 'Todos os dias - 10:00 às 18:00', localizacao: 'Palermo | Av. Casares 3450', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'planetario-galileo-galilei', bairro: 'palermo', imagem: 'imagens/img4/planetario.jpeg', nome: 'Planetário Galileo Galilei', tipo: 'Museu e Planetário', valor: 'R$30,00', funcionamento: 'Terça a Domingo - 12:00 às 17:00 | Sábado e Domingo - 12:00 às 20:00', localizacao: 'Palermo | Av. Sarmiento', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'arcos-del-rosedal', bairro: 'palermo', imagem: 'imagens/img4/arcosdelrosedal.jpeg', nome: 'Arcos del Rosedal', tipo: 'Parque e Passeio', valor: 'Gratuito', funcionamento: 'Todos os dias - 10:00 às 22:00', localizacao: 'Palermo | Av. del Libertador 80', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'eco-parque', bairro: 'palermo', imagem: 'imagens/img4/ecoparque.jpeg', nome: 'Eco Parque', tipo: 'Parque e Zoológico', valor: 'Gratuito', funcionamento: 'Terça a Domingo - 11:00 às 18:00', localizacao: 'Palermo | Av. Sarmiento 2601', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'jardim-botanico', bairro: 'palermo', imagem: 'imagens/img4/botanico.jpeg', nome: 'Jardim Botânico', tipo: 'Jardim e Parque', valor: 'Gratuito', funcionamento: 'Terça a Domingo - 09:30 às 18:00', localizacao: 'Palermo | Av. Sta. Fe 3957', mapaLink: 'https://goo.gl/maps/example' },
    { dia: 4, id: 'el-purgatorio', bairro: 'palermo', imagem: 'imagens/img4/purgatorio.jpeg', nome: 'El Purgatório', tipo: 'Bar', valor: '$$$', funcionamento: 'Terça a Domingo', localizacao: 'Palermo | El Salvador 4677', mapaLink: 'https://goo.gl/maps/example' }
  ];

  // LISTA COM TODOS OS RESTAURANTES (PAGINA GERAL)
  const restaurantes = [
    { id: 'cuartito', bairro: 'centro', nome: 'El Cuartito', tipo: 'Pizza e Empanadas', valor: '$', funcionamento: 'Terça a Domingo - 12:30 às 00:00', localizacao: 'Centro | Talcahuano 937', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'guerrin', bairro: 'centro', nome: 'Guerrin', tipo: 'Pizza e Empanadas', valor: '$', funcionamento: 'Domingo a Quinta - 11:00 às 01:00 | Sexta e Sábado - 11:00 às 02:00', localizacao: 'Centro | Av. Corrientes 1368', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'waffles-del-mundo', bairro: 'tigre', nome: 'Waffles Del Mundo', tipo: 'Waffles e Sobremesas', valor: '$', funcionamento: 'Terça a Domingo - 11:30 às 19:30', localizacao: 'Tigre | Sarmiento 160', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'mostaza-palermo', bairro: 'palermo', nome: 'Mostaza', tipo: 'Fast-food', valor: '$', funcionamento: 'Todos os dias - 10:00 às 23:00', localizacao: 'Palermo | Av. Sta. Fe 3253', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'bellagamba-bodegon-palermo', bairro: 'palermo', nome: 'Bellagamba Bodegón', tipo: 'Bodegón (Pratos variados)', valor: '$$', funcionamento: 'Todos os Dias - 08:00 às 02:00', localizacao: 'Palermo | Armenia 1242', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'cadore', bairro: 'centro', nome: 'Cadore', tipo: 'Sorvete Artesanal', valor: '$$', funcionamento: 'Terça a Domingo - 12:00 às 00:00', localizacao: 'Centro | Av. Corrientes 1695', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'campaso', bairro: 'centro', nome: 'Campaso', tipo: 'Bodegón e Parrilla', valor: '$$', funcionamento: 'Segunda a Sábado - 09:00 às 01:00', localizacao: 'Centro | Bernardo de Irigoyen 82', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'la-pinocha-palermo-rest', bairro: 'palermo', nome: 'La Pinocha', tipo: 'Chocolate e Alfajor', valor: '$$', funcionamento: 'Todos os dias - 10:00 às 20:00', localizacao: 'Palermo | Honduras 4866', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'las-cabras', bairro: 'palermo', nome: 'Las Cabras', tipo: 'Parrilla', valor: '$$', funcionamento: 'Todos os dias - 12:00 às 01:00', localizacao: 'Palermo | Fitz Roy 1795', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'san-vortice', bairro: 'san-telmo', nome: 'San Vortice', tipo: 'Massas Artesanais', valor: '$$', funcionamento: 'Terça a Domingo - 12:00 às 17:00', localizacao: 'San Telmo | Defensa 963', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'tiempos-de-reencuentro', bairro: 'palermo', nome: 'Tiempos de Reencuentro', tipo: 'Bodegón e Parrilla', valor: '$$', funcionamento: 'Todos os dias - 08:00 às 01:00', localizacao: 'Palermo | José A. Cabrera 4801', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'republica-del-fuego', bairro: 'recoleta', nome: 'República del Fuego', tipo: 'Parrilla', valor: '$$$', funcionamento: 'Terça a Sábado - 19:00 às 02:00 | Domingo - 12:00 às 16:00', localizacao: 'Recoleta | Juncal 2682', mapaLink: 'https://goo.gl/maps/example' },
    { id: 'villegas', bairro: 'puerto-madero', nome: 'Villegas Resto & Grill', tipo: 'Parrilla', valor: '$$$$', funcionamento: 'Todos os dias - 12:00 às 00:00', localizacao: 'Puerto Madero | Av. Alicia Moreau de Justo 1050', mapaLink: 'https://goo.gl/maps/example' },
  ];



//------------------//
// 2. FUNÇÕES DO JS //
//-----------------//

// FUNÇÕES PROS LINKS DO MENU HAMBURGUER
 function renderizarMenuLateral(dados) {
    const menu = document.getElementById('menu-lateral');
    if (!menu) return;
    const botaoFechar = menu.querySelector('#botao-fechar-menu');
    let menuHTML = '';
    dados.forEach(dia => {
      menuHTML += `<a href="${dia.link}"><span class="menu-dia-numero">Dia ${dia.diaNum}</span><span class="menu-dia-data">${dia.data} - ${dia.diaNome}</span></a>`;
    });
    botaoFechar.insertAdjacentHTML('afterend', menuHTML);
  }
  
  // FUNÇÕES DOS CARDS
  function renderizarCards(dados, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; 
    container.innerHTML = '';
    const comFoto = containerId.includes('dia');
    dados.forEach(lugar => {
      const fotoHTML = comFoto 
        ? `<div class="card-photo"><img src="${lugar.imagem}" alt="${lugar.nome}" /></div>`
        : '';
      const cardHTML = `<div class="card" data-id="${lugar.id}" data-bairro="${lugar.bairro}">${fotoHTML}<div class="card-info"><h4>${lugar.nome}</h4><p><strong>Tipo:</strong> ${lugar.tipo}</p><p><strong>Valor:</strong> ${lugar.valor}</p><p><strong>Funcionamento:</strong> ${lugar.funcionamento}</p><p><strong>Localização:</strong> ${lugar.localizacao}</p><p><a href="${lugar.mapaLink}" target="_blank">Ver no mapa</a></p></div></div>`;
      container.innerHTML += cardHTML;
    });
  }

  // FUNÇÕES PRO MENU HAMBURGUER ABRIR E FECHAR
  function configurarMenuLateral() {
    const botaoAbrir = document.getElementById('botao-abrir-menu');
    const botaoFechar = document.getElementById('botao-fechar-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const overlay = document.getElementById('overlay');
    if (botaoAbrir && menuLateral && botaoFechar && overlay) {
      const abrirMenu = () => {
        menuLateral.classList.add('aberto');
        overlay.classList.add('aberto');
      };
      const fecharMenu = () => {
        menuLateral.classList.remove('aberto');
        overlay.classList.remove('aberto');
      };
      botaoAbrir.addEventListener('click', abrirMenu);
      botaoFechar.addEventListener('click', fecharMenu);
      overlay.addEventListener('click', fecharMenu);
    }
  }


 //-------------------------//
// 3. EXECUÇÃO DAS FUNÇÕES //
//-------------------------//

// RENDERIZA O MENU LATERAL
  renderizarMenuLateral(diasDoRoteiro);

// RENDERIZA OS CARDS NA PAGINA
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  if (pagina === 'index.html') {
    const atracoesDoDia = atracoes.filter(a => a.dia === 1);
    renderizarCards(atracoesDoDia, 'cards-dia-1');
  } else if (pagina === 'dia2.html') {
    const atracoesDoDia = atracoes.filter(a => a.dia === 2);
    renderizarCards(atracoesDoDia, 'cards-dia-2');
  } else if (pagina === 'dia3.html') {
    const atracoesDoDia = atracoes.filter(a => a.dia === 3);
    renderizarCards(atracoesDoDia, 'cards-dia-3');
  } else if (pagina === 'dia4.html') {
    const atracoesDoDia = atracoes.filter(a => a.dia === 4);
    renderizarCards(atracoesDoDia, 'cards-dia-4');
  } else if (pagina === 'todos.html') {
    renderizarCards(restaurantes, 'container-restaurantes');
  }
  
  // RENDERIZA O MENU HAMBURGUER
  configurarMenuLateral();

}); 