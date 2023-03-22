const menu = document.querySelector('#menu')
const nav = document.querySelector('#hamburger')

menu.addEventListener('click', () => {
  menu.classList.toggle('open')
  nav.classList.toggle('navbar-hamburger')
})


// DATA ----->
const dataPrueba = localStorage.getItem("products");
const data = JSON.parse(dataPrueba);

// CARRITO ----->
let productos = data;
let carrito = [];

// CARRITO -----> AGREGAR AL CARRITO ----->
function addToCart() {
  
}
let cart = document.getElementById('carrito')


// addToCart.addEventListener('click', () => {

//   if (carrito.length == 0) {
//     carrito.push(vacio++)
//     console.log(carrito)
//   } else {
//     carrito.push(vacio++)
//     console.log(carrito)
//   }
//   cart.innerHTML = `${carrito.length}`
// });

// cartClear.addEventListener('click', () => {
//   carrito = carrito.length = [];
//   console.log(carrito);
//   cart.innerHTML = `${carrito.length}`
// });





