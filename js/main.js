

let numero = 7
let multiplicador = 1

for(i=10; i <= 1; i--){
    multiplicador = i
    console.log(numero + ' X  ' + multiplicador + ' = ' + numero*multiplicador)
}

//imprime multiplos de 3 y 7 del 1 al 100
/* 
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
 */