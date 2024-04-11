// Creamos las variables constantes por selector
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

// luego agregamos un detector de eventos para la funcion flecha;
// para search cambiamos su classList para 'active" y toggle significa que alternara entre oculto y visible dependiendo del click
// el input:focus es para que el enfoque este en el input (en este caso el buscador y puedas escribir directo sin hacer click)

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})