const koders = ['ale', 'brian', 'carlos', 'diana', 'emmanuel']

const addelements = (selector, number, arrNumber) =>{
    for (let i = 0; i <= number|| arrNumber.lenght; i++){
        let lista = document.createElement('li')
        let listext = 'Koder ' + (i+1) + ': '+  arrNumber[i]
        document.getElementById(selector).appendChild(lista)
        lista.innerHTML = listext
    }
}
addelements('lista', 4, koders)