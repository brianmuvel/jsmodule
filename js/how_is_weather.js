let weather = prompt('Cómo esta el clima hoy?')

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
} 