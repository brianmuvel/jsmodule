let weather = prompt('Cómo esta el clima hoy?')


if (weather === "soleado"){
    console.log(`El clima esta soleado`)
}
if (weather === "lluvioso"){
    console.log(`El clima esta lluvioso`)
}
if (weather === "nevado"){
    console.log(`El clima esta nevado`)
}
if (weather === "nublado"){
    console.log(`El clima esta nublado`)
}

else{
    let otro = prompt('Entonces cómo esta tu día?')
    console.log(`El clima esta ${otro}`)
} 