/* const myArray = [1,4,7]

for (let i = 0; i < myArray.length; i++){
    const table = myArray[i]
    for (let j = 1; j <= 10; j++){
        console.log(`${table} x ${j} = ${table*j}`)
    }
} */
/* 
*/
/* const myArray = [1,4,7]
myArray.forEach( table =>{
    for (let i = 1; i <= 10; i++){
        console.log(`${table} x ${i} = ${table*i}`)
    }
})
*/

//funcion que con pasar aarray separa solo los valores pares
/*
/*
//METODO FOREACH_____________________________________________________-
*/  
//const arrNumbers = [1,2,3]
/* function doubleValue (arrNumbers){
    arrNumbers.forEach( valor =>{
        console.log(valor+valor)
    })
} */
const doubleValue = arrNumbers => {
    let arrayToFill = []
    arrNumbers.forEach( valor =>{
        arrayToFill.push(valor*2)
        //console.log(valor+valor)
    })
    return arrayToFill
}
let arrDouble = [1,2,3,4]
const resutadoDoble = doubleValue(arrDouble)

/* 
function soloPares(array){
    array.forEach(valor =>{
        if (valor%2 === 0)
        console.log(valor)
    })
}
 */
const soloPares = array => {
    let vale = []
    array.forEach(valor =>{
        if (valor%2 === 0)
        vale.push(valor)
        //console.log(valor)
    })
    return vale
}
const array = [1,2,3,5,6,7]
const resultadoPares = soloPares(array)
/*
function losPrimerosUltimos (stringArray){
    stringArray.forEach(soloDos =>{
        let inicial = soloDos.slice(0, 1)
        let final = soloDos.slice(-1)
        console.log(inicial+final)
    })
}
 */
const losPrimerosUltimos = stringArray => {
    let arrayToFill = []
    stringArray.forEach(soloDos => {
        let inicial = soloDos.slice(0, 1)
        let final = soloDos.slice(-1)
        arrayToFill.push(inicial+final)
        //console.log(inicial+final)
    })
    return arrayToFill
}
const stringArray = ['Hola', 'Mundo']
let resultadoArray = losPrimerosUltimos(stringArray)

/*
const arraySuma = [1,2,3,4]
let total = 0

for(let i = 1; i<= arraySuma.length; i++){
    total += arraySuma[i-1]
}
console.log(total)
 */
/* 
const arreglo = [1,2,3,4]
arreglo.push(5,6,7,8,9,10)
console.log(arreglo)

var ages = [3, 10, 18, 20];
const checkAdult = age => age >= 18
checkAdult(3)
let resultado = ages.some(checkAdult)
console.log(resultado)
 */

//METODO MAP________________________________--
 // .map() 
 //cuando el resultado que quieres es un ARRAY hay que usar map si no usar for each
//const newArray = [10,20,3].map(currentValue =>  currentValue*2)

////console.log(newArray)


//const doubleValue2 = arrNumbers => arrNumbers.map(valor => valor*2)

const soloPares2 = arrNumber => arrNumber.filter(valor => valor%2===0)

// .reduce() te retorna un acumulador 