
console.log('dom')
let txt = 'Sun una variable'
let titulo = document.createElement('h1')
titulo.innerHTML = 'Soy un titulo'

//tambien agrega texto a una etiqueta html
//let texto = document.createTextNode('Soy otra forma')


document.getElementById('container').appendChild(titulo)



//let lista = document.createElement('li')

//anchor.innerHTML = txt
let item = 3
let iden = 'ul'
function repetirLista(item, iden) {
    for (let i = 1; i <= item; i++){
        let lista = document.createElement('li')
        let anchor = document.createElement('a')
        anchor.href = '#'
        let listext = 'Item'  + i
        document.getElementById(iden).appendChild(lista).appendChild(anchor)
        anchor.innerHTML = listext
    }
}
let list = repetirLista(item, iden)

//Otra forma
/* let forma2 = document.createElement('ul')
forma2.innerHTML ='<li><a href="#">Item1</li><li><a href="#">Item2</li>'
//
document.getElementById('caja2').appendChild(forma2)

let secciones = document.getElementsByTagName('secction')
secciones.classList('unaClase')
 */



const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}
const kodersArr = ['ale','oscar','ruben', 'brian', 'zayra']
//addElements('#lista', 4, kodersArr)


function filter(letter) {
    var results = [];
    var len = kodersArr.length;
    for (var i = 0; i < len; i++) {
      if (kodersArr[i].indexOf(letter) == 0) results.push(kodersArr[i]);
    }
    return document.querySelector('#lista').innerHTML = results;
  }



const filterKoders = (letter) =>{
    let filtrados = kodersArr.filter((koder)=>{
        return koder.toLowerCase().startsWith(letter)
    })
    addElements('#lista', filtrados.length, filtrados)
}
//funcion de filter o metodo innerHTML se tiene que disparar 

//addElements('#lista', kodersArr.length, filterKoders('a'))

//tarea
function ascendente () {
    let valor = document.getElementById("select").value
    if (valor == 1){
        console.log(valor)
        addElements('#lista', kodersArr.length, kodersArr.sort())
    } else if (valor == 2){
        let arreglado = kodersArr.sort().reverse()
        addElements('#lista', kodersArr.length, arreglado)
    }
}
