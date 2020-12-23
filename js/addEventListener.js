

const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}
const kodersArr = ['ale','oscar','ruben', 'brian', 'zayra']

let showAll = document.getElementById('todos').addEventListener("click", function(){
    addElements('#lista', 4, kodersArr)
})

