let score = prompt('¿Cuál es tu calificacion?')

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