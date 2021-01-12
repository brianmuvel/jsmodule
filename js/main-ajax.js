// Asynchronous JavaScript And XML
// JSON
// XML

// GET 
const getData = (url, funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                
                funcionALlamar(selector, objectResponse)

            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    
    })
    request.open(method,url)
    request.send()
}

const printUsers = (selector, arrData) => {
    console.log(arrData)
    let listData =  ''
    arrData.forEach(user => {



        listData += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">${user.phone}</p>
          <a href="user.html?id=${user.id}" class="btn btn-primary">Ver usuario</a>
        </div>
        </div>`
    });
    document.querySelector(selector).innerHTML = listData
}

const printPosts = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `<div class="card">
        <div class="card-body">
        <h5>${user.title}</h5>
        <p>${user.body}</p>
        </div></div>`
    });
    document.querySelector(selector).innerHTML = listData
}


// loadUsers()

document.getElementById('getusers').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
})

document.getElementById('getposts').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
})


