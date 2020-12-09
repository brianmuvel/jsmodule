//pedir al usuario dos numeros y evaluar cual es mayor y despues imprimir en consola el num mayor
const NUMBER_ONE = parseInt(prompt('Ingresa un número'))
const NUMBER_TWO = parseInt(prompt('Ingresa otro número diferente'))

let resultado = NUMBER_ONE

if (NUMBER_ONE > NUMBER_TWO){
    console.log(`El primer numero ${NUMBER_ONE} es mayor que ${NUMBER_TWO}`)
}else if (NUMBER_ONE === NUMBER_TWO){
    alert('Son iguales!')
} else {
    console.log(`El segundo numero ${NUMBER_TWO} es mayor que el primer número ${NUMBER_ONE}`)
}
