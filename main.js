const menu = document.querySelector('#menu')
const nav = document.querySelector('#hamburger')

menu.addEventListener('click', () => {
  menu.classList.toggle('open')
  nav.classList.toggle('navbar-hamburger')
})