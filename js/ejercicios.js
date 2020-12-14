//funciones
function tablas (str) {
    
    let arreglo = str.slice()
    
    
    for (let j=0; j<= str.length-1; j++){
        let tabla = arreglo[j]
        for (let i=1; i<= 10; i++){
            console.log(`${tabla} X ${i}  =  ${tabla*i}`)
        }
    }

}

function reverse(texto) {
    let palabra = texto.replace(/ /g, '')
    let reversa = ''
    for(let i = palabra.length-1; i >= 0; i--){
        reversa += palabra[i]
    }
    if (reversa === palabra){
        console.log('ESO CHINGA')
    } else{
        console.log('no es palidromo')
    }
}


function queEs(tipo1, tipo2){
    console.log(typeof tipo1, typeof tipo2)
}


//tarea fin de semana
/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */
function calculateDogAge (nombre, edad){
    console.log(`${nombre} tiene ${edad*7} años caninos`)
}

/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */
function calcGeometry(radio){
    const PI = 3.1416
    console.log(`El área del círculo es de ${(radio*radio)* PI} y la circunferencia es de ${(2*PI)*radio}`)
}

/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */
// 10-convierte grados fahrenheit a celsius
function toCelsius(f) {
    let convert = (5/9) * (f-32)
    console.log(convert)
}
// 11-convierte grados celsius a fahrenheit
function toFahrenheit(c){
    let convert = c*(9/5)+ 32
    console.log(convert)
}