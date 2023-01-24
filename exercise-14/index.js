// Crea un nuevo proyecto de Node
// - Instala la dependencia HTTP Server en entorno global (https://www.npmjs.com/package/http-server)
// - Crea un fichero index.html (utiliza el comando "!")
// - Crea un fichero index.js
// - Integra el fichero index.js en el html
// - Crea un botón en html (<button>Botón</button>)
// - Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"
// - Crea un script para lanzar un servidor de desarrollo con http-server
// - Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente
// - Integra jQuery a través del CDN (https://releases.jquery.com/)
// - En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"


const btn = document.querySelector('.btn');
const btnJQuery = document.querySelector('.btn-jquery');

btn.addEventListener(('click'), event=>{
    console.log('holis');
    alert('Click en el botón');
});

$(() =>{
    $('.btn-jquery').click(() =>{
        console.log('Hola, estoy utilizando jQuery');
    })
})


// $('selector').accion()
// $(document).ready(() =>{})
// selectores:
// id= "ele1" => "#ele1"
// class= "ele1" => ".ele1"

// $(() =>{
//     $('.hide-btn').click(() =>{
//         // $('h1').hide()
//         $('h1').fadeOut()
//     })
//     $('.show-btn').click(() =>{
//         // $('h1').show()
//         $('h1').fadeIn()
//     })
//     $('li').click(() =>{
//         $('h1').css({ color: "red" })
//     })
//     $('.new-el').click(() =>{
//         // $('ul').append('<li>Elemento 4</li>') crea nuevo elemnto abajo
//         $('ul').prepend('<li>Elemento 4</li>') //crea nuevo elemento attiba
//     })
//     $('li').mouseenter((elem) =>{
//         elem.target.style.color = 'blue';
//     })
//     $('li').mouseleave((elem) =>{
//         elem.target.style.color = 'black';
//     })
// })