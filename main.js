// const menu = document.querySelector('#menu')
// const nav = document.querySelector('#hamburger')

// menu.addEventListener('click', () => {
//   menu.classList.toggle('open')
//   nav.classList.toggle('navbar-hamburger')
// })

// DATA ----->
import { getData } from "./api.js";
document.addEventListener('DOMContentLoaded', getData(renderData))

function renderData(data) {
  // BUCLE PARA OBTENER LOS DATOS DE CADA OBJETO DENTRO DEL ARRAY.
  for(let i = 0; i < data.length; i++) {
    let id = data[i].id;
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
          <a class="article-container2-button" id="addToCart" data-id="${id}" onclick="addToCart()">
            <img src="./images/icon-svg/cart-4.svg" alt="" class="article-container2-button-img">
            <span>$${price}</span>
          </a>
        </div>
      </div>
    `;
    articulos.innerHTML += estructuraArticulos;
  };
};
