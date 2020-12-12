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
