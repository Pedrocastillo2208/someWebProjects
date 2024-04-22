// criamos as constantes lOadText para que el texto se desenfoque y desaparezca
// y la const bg para que la imagen se enfoque
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// y la variable load=0 poeque va ir de 0% a 100% el texto
// creamos la variable int, que va ser el intervalo de desenfoque(blurring) y va ser de 30 milisegundos
let load = 0
let int = setInterval(blurring, 30)

// hacemos la funcion blurring(desenfoque) y el valor de carga se incrementa en uno
// hacemos la condicion que no pase de 99 y cuando llegue a 99 se ejecutara el clearInterval que viene a ser el int(blurring de 30 ms)
function blurring() {
    load++

        if(load > 99) {
            clearInterval(int)
        }
            // para que se muestre la carga en el texto
            // para que cambie la opacidad del texto hacemos lo segundo
        loadText.innerText = `${load}%`
        loadText.style.opacity = scale(load, 0, 100, 1, 0)
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
