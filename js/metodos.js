/*
evento resize
resolucion ancho < 767
aparecer contenido mobile
sino 
desaparecer contenido mobile
aparecer contenido desktop
*/

let desktop = document.getElementById('desktop')
let mobile = document.getElementById('mobile')

//con classList lo que hace es cambio entre clases si es que la clase ya existe previamente ej. .remove{display:none}
//con setAttribute agrega un atrubuto directo al elemento HTML

function contenido() {
    let ancho = window.innerWidth
    if(ancho <= 767){
        desktop.classList.add('remove')
        mobile.classList.remove('remove')
        //mobile.setAttribute('style' , 'display:block')
        //desktop.setAttribute('style' , 'display:none')
    }else{
        mobile.classList.add('remove')
        desktop.classList.remove('remove')
        //mobile.setAttribute('style' , 'display:none')
        //desktop.setAttribute('style' , 'display:block')
    }
    console.log(ancho)
}
window.addEventListener('resize', contenido)
window.addEventListener('load', contenido)


//cookie
/* SI exixte la cookie logged mandamos mensaje bienvenido

si no existe mensaje user is offline

loguearlo
*/
let session = document.getElementById('session')

let cookie = document.cookie

cookie ='logged=true'


const isLogged = () => {
    if (cookie === 'logged=true'){
        session.innerHTML='Bienvenido'
    }else {
        session.innerHTML='El usuario esta OFFLINE'
    }
    cookie ='logged=true'
}
window.addEventListener('load', isLogged)

/*
TAREA
01.
Si el usuario no tiene la cookie sessionuser
redureccionarlo al /login.html
si tiene la cookie session user
redireccionarlo a /user.html
window.open

02.
clrear un div con un mensaje de 
"Este sitio se ve mejor en desktop"
so el viewport es > <= 767
aparecer el mensaje

si no
desaparecer el mensaje 
utilizar css

*/