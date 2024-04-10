// criamos variables constantes para cada boton del navegador y el container de abajo(query selector porque es una clase)
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


// criamos eventos al hacer click en boton open, agrega el show-nav; y al hace click en boton close cierra el show-nav
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))