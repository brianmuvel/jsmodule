
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
function repetirLista(item) {
    for (let i = 1; i <= item; i++){
        let lista = document.createElement('li')
        let anchor = document.createElement('a')
        anchor.href = '#'
        let listext = 'Item'  + i
        document.getElementById('ul').appendChild(lista).appendChild(anchor)
        anchor.innerHTML = listext
    }
}
let list = repetirLista(item)

//Otra forma
let forma2 = document.createElement('ul')
forma2.innerHTML ='<li><a href="#">Item1</li><li><a href="#">Item2</li>'
//
document.getElementById('caja2').appendChild(forma2)