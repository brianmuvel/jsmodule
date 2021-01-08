

let showAll = document.getElementById('todos').addEventListener("click", function(){
    addElements('#lista', 4, kodersArr)
})
let showA = document.getElementById('comienza-a').addEventListener("click", function(){
    filterKoders('a')
})
let showO = document.getElementById('comienza-o').addEventListener("click", function(){
    filterKoders('o')
})
let showR = document.getElementById('comienza-r').addEventListener("click", function(){
    filterKoders('r')
})


