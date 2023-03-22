// URL API.
const url = 'https://fakestoreapi.com/products';

function renderData(data) {
    // BUCLE PARA OBTENER LOS DATOS DE CADA OBJETO DENTRO DEL ARRAY.
    for(let i = 0; i < data.length; i++) {
      let title = data[i].title;
      let image = data[i].image;
      // let description = data[i].description;
      // let category = data[i].category;
      let price = data [i].price;


      // ESTRUCTURA DE ARTICULOS EN EL HTML.
      let articulos = document.getElementById('Articles');
      let estructuraArticulos = `
      <div class="article-container" id="articulo">
          <img src="${image}" alt="" class="article-container-img">
          <div class="article-container2">
            <a id="article_Title" class="article_title">${title}</a>
            <a class="article-container2-button" id="addToCart">
              <img src="./images/icon-svg/cart-4.svg" alt="" class="article-container2-button-img">
              <span>$${price}</span>
            </a>
          </div>
        </div>
      `;
      articulos.innerHTML += estructuraArticulos;
    };
  };

async function getData() {
  const data = await fetch(url);
  const json = await data.json();
  localStorage.setItem("products",JSON.stringify(json));
  renderData(json)
}

// LLAMADA A LA API CON FETCH.
// document.addEventListener('DOMContentLoaded', getData);
getData()
