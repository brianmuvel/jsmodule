function add(a, b){
    return a + b
}
add (2, 3)
const addArrow = (a, b) =>{
    return a + b
}
addArrow(2, 3)

const addArrowDos = (a, b) => a + b
console.log(addArrowDos(2, 3))


//funciones ARROW

const TABLAS = (str) => {
    let arreglo = str.slice()
    
    
    for (let j=0; j<= str.length-1; j++){
        let tabla = arreglo[j]
        for (let i=1; i<= 10; i++){
            console.log(`${tabla} X ${i}  =  ${tabla*i}`)
        }
    }
}
const REVERSE = (texto) => {
    let palabra = texto.replace(/ /g, '')
    let reversa = ''
    for(let i = palabra.length-1; i >= 0; i--){
        reversa += palabra[i]
    }
    if (reversa === palabra){
        console.log('ESO PALINDROMO!')
    } else{
        console.log('no es palidromo')
    }
}


const QUES = (tipo1, tipo2) => console.log(typeof tipo1, typeof tipo2)


const calculateDogAge = (nombre, edad) => console.log(`${nombre} tiene ${edad*7} años caninos`)


const calcGeometry = radio =>{
    const PI = 3.1416
    console.log(`El área del círculo es de ${(radio*radio)* PI} y la circunferencia es de ${(2*PI)*radio}`)
}


const toCelsius = f => console.log((5/9) * (f-32))

const toFahrenheit = c => console.log(c*(9/5)+ 32)