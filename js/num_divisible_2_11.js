let number = prompt('Pon un numero entre 1 y 100')

if (number >=1 && number <= 100){
    if (number % 2 === 0 && number % 11===0){
        console.log('Es divisible entre 2 y 11')
    }else{
        console.log('El número no es divisible')
    }

} else{
    alert('Numero invalido')
}