//Saber que calificacion tienes
function calificacion(score){
    if (score >= 90 && score < 101){
        alert('EXELENTE tu calificación es A!')
    }else if (score >= 80 && score < 90){
        alert('BIEN tu calificación es B!')
    } else if (score >= 70 && score < 80) {
        alert('OK, tu calificación es C!')
    } else if (score >= 60 && score < 70) {
        alert('MMMM tu calificación es D!')
    } else if (score >= 50 && score < 60) {
        alert('UFFF tu calificación es E!')
    } else if (score < 50) {
        alert('REPROBADO! tu calificación es F!')
    } else {
        alert('Numero no válido')
    }
}


//Que dia es segun el dia que le pones
function numeroDelDia (day){    
    switch (day) {
        case '1':
            alert('Es Lunes!')
            break
        case '2':
            alert('Es Martes!')
            break
        case '3':
            alert('Es Miercoles!')
            break
        case '4':
            alert('Es Jueves!')
            break
        case '5':
            alert('Es Viernes')
            break
        case '6':
            alert('Es Sabado!')
            break
        case '7':
            alert('Es Domingo!')
            break
    
        default : alert('NO ES NUMERO VALIDO')
    }
}

//Fabrica una tabla con dos valores. el primer valor es el numero de la tabla y el segundo valor es hasta donde va a multiplicar
function tabla(tabla, hasta){
    let multiplicador 
    for(let i=1; i<=hasta; i++){
        multiplicador = i
        console.log(tabla + ' X  ' + multiplicador + ' = ' + tabla*multiplicador)
    }
}
''

function esDivisibleDosOnce (){
    let numbero = prompt('Pon un numero entre 1 y 100')
    
    if (numbero >=1 && numbero <= 100){
        if (numbero % 2 === 0 && numbero % 11===0){
            console.log('Es divisible entre 2 y 11')
        }else{
            console.log('El número no es divisible')
        }
    } else{
        alert('Numero invalido')
    }
}

//Intercambiar el usuario de cualquier email por ******
function secretUser (email){
    let n = email.search('@')
    let email_user = email.slice(0,n)
    let m = email_user.length
    let user = ''
    for (let i = 0; i<m; ++i){
        user = user + '*'
    }
    console.log (user.concat(email.slice(n)))
}

//Cambia espacios por guiones (-)
function dashIt (text){
    let texto = text
    console.log(texto.replace(/ /g,'-'))
}


//Imprime multiplos de 7 hasta el 100
function multiplosSieteHastaCien (){
    for(i=1; i <= 100; i++){
        if(i%3 ===0){
            console.log(i)
        } else if (i%7 ===0){
            console.log(i)
        }
    }
}

//Calcula el peso en la luna segun el peso en la tierra
function pesoLunar(earthweight) {
    let peso_lunar = (parseInt(earthweight) / 9.81) * 1.622
    console.log('Tu peso en la luna es..'+ peso_lunar + ' Kg')

}

//transforma un texto al reves
function reverse(texto) {
    let palabra = texto
    let reversa = ' '
    for(let i = palabra.length; i >= 0; i--){
        reversa += palabra[i]
    }
    console.log(reversa)
}

//convierte grados fahrenheit a celsius
function toCelsius(f) {
    let convert = (5/9) * (f-32)
    console.log(convert)
}
//convierte grados celsius a fahrenheit
function toFahrenheit(c){
    let convert = c*(9/5)+ 32
    console.log(convert)
}