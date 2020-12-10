/* Imprimir en consola la tabla del 7
7 x 1 = 7
imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
3,6,7,9,12,14,15....

imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
“en un lugar de la mancha” -> 5

imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
“Hola mundo” -> 4 */



//tablas de cualquier numero

let numero = 7
let multiplicador = 1

for(i=0; i <= 10; i++){
    multiplicador = i
    console.log(numero + ' X  ' + multiplicador + ' = ' + numero*multiplicador)
}

//imprime multiplos de 3 y 7 del 1 al 100

for(i=1; i <= 100; i++){
    if(i%3 ===0){
        console.log(i)
    } else if (i%7 ===0){
        console.log(i)
    }
}

//imprime cuantas veces existe el espacio en la variable texto
let texto = 'en un lugar de la mancha'
console.log(texto.match(/ /g).length)

//imprime cuantas vocales hay en el string hola mundo
let textoHola = 'hola mundo'
console.log(textoHola.match(/[aeiou]/g).length)
