// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]
let arrNumber = [1,4,3,2,5]
const ejercicio1 = arrNumber => {
    //let algo = []
    arrNumber.foreach(valor => valor<=valor+1)
}

const ejercicioUno = arrNumber => {
    let arrayToFill = []
    arrNumber.forEach(esAlto => {
        if(esAlto < arrNumber){

            arrayToFill.push(esAlto)
        }
    })
    return arrayToFill
}

let resultadoArrayUno = ejercicioUno(arrNumber)

// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']
let arr2 = [1,2,3,4,5]
const ejercicio2 = arr2 => arr2.map(valor => valor.toString())

// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]
let arr3 = ['hOlA', 'mundo', 123]
const ejercicio3 = arr3 => arr3.map(valor => valor.toString().slice(0,1).toUpperCase())
let resultado3 = ejercicio3(arr3)

// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]
let arr4 = [1,2,4,2,5,4]
//const ejercicio4 = arr4 => arr4.filter(valor => valor.indexOf(arr4))
//let resultado4 = ejercicio4(arr4)

// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
let arr5 = [1,2,4,2,5,4]
let arr5Previo = []
// -> [2,4]
function esDuplicado (arr5){
    return arr5 == arr5Previo
}


// ejercicio 7 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
let years = [1990, 2000, 2001, 2020]
// -> [2000,2020]
const ejercicio7 = years => years.filter(valor => valor/100 ===0 && valor/400 ===0|| valor%4===0)

const arrReduce = ['a','b','c','c','d','f']
const searchOcurrence = (arrReduce, elTosearch) => {
    let ocurrence = arrReduce.reduce((accumulador, current) => {
        let suma = current === elTosearch ? 1 : 0
        return accumulador+suma
    }, 0 )
    return ocurrence
}
let resultados = searchOcurrence(arrReduce)






const frase = ['en','algun','lugar','de','la','mancha']

let resutadoFrase = frase.reduce((arre, palabra)=> `${arre.toString()} ${palabra}`)
//let resutadoFrase = frase.reduce((arre, palabra)=> arre + ' ' + palabra,'')


let person = {
    location: {
        cp: '234234',
        street: 'asda'
    }
}

for(item in person){
    if(item === 'location' ){
        for(item2 in person[item]){
            console.log()
        }
    }
}

for(item in person['location']){
    console.log()
}

