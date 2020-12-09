let weather = prompt('Cómo esta el clima hoy?')
/* 
if (weather === "soleado"){
    console.log(`El clima esta soleado`)
}
else if (weather === "lluvioso"){
    console.log(`El clima esta lluvioso`)
}
else if (weather === "nevado"){
    console.log(`El clima esta nevado`)
}
else if (weather === "nublado"){
    console.log(`El clima esta nublado`)
}
else{
    let otro = prompt('Entonces cómo esta tu día?')
    console.log(`El clima esta ${otro}`)
}  */

switch(weather){
    case 'soleado':
        console.log(`El clima esta soleado`)
        break
    case 'lluvioso':
        console.log(`El clima esta lluvioso`)
        break
    case 'nevado':
        console.log(`El clima esta nevado`)
        break
    case 'nublao':
        console.log(`El clima esta nublado`)
        break
    default:
        let otro = prompt('Entonces cómo esta tu día?')
        console.log(`El clima esta ${otro}`)
}