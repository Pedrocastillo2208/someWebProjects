// creamos las constantes de left , right  y container (para que se mantenga normal)
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// crearemos el evento cuando entremos al lado izquierdo (mouseenter), se transforme en una classList de hover-left
// y cuando salgamos(mouseleave) se remueva el hover-left
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// igual para el lado derecho
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))