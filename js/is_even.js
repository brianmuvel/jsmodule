let number = prompt('Pon un numero entre 1 y 100')

if (number >=1 && number <= 100){
    if (number % 2 === 0){
        console.log('ES PAR!')
    }else{
        console.log('Es IMPAR!')
    }

} else{
    alert('Numero invalido')
}