window.addEventListener('popstate', function (event) {
    // Log the state data to the console
    console.log("event.state");
});
let busqueda = location.search.slice(4)
let id = busqueda - 1


const getData = (url, funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const objectResponse = JSON.parse(response.responseText)

                funcionALlamar(selector, objectResponse)

            } else {
                console.log('No se pudo ejecutar')
            }
        }

    })
    request.open(method, url)
    request.send()
}
const printUsers = (selector, arrData) => {
    let listData = ''
    if (busqueda > 9 || busqueda == 0) {
        listData = 'EL usuario no existe'
    } else {

        let nombre = (arrData[id].name)
        let user = (arrData[id].username)
        let correo = (arrData[id].email)
        let link = (arrData[id].website)
        let phone = (arrData[id].phone)
        //direccion
        let street = (arrData[id].address.street)
        let suite = (arrData[id].address.suite)
        let city = (arrData[id].address.city)
        let zip = (arrData[id].address.zip)
        //geolocation
        let lat = (arrData[id].address.geo.lat)
        let lng = (arrData[id].address.geo.lat)
        //company
        let companame = (arrData[id].company.name)
        let compacatch = (arrData[id].company.catchPhrase)
        let compabs = (arrData[id].company.bs)

        listData = `
            <div class="card-body">
             <h3 class="card-title  text-white ">${nombre}</h3>
             <h5 class="card-title  text-white ">User: ${user}</h5>
             <p class="card-text  text-white ">Email: ${correo}</p>
             <p class="card-text  text-white ">Phone: ${phone}</p>
             <a href="#" class="btn btn-primary">${link}</a>

             <div class="card-header">
            <h5>Adress</h5>
            </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item"><strong>Street: </strong>${street} </li>
             <li class="list-group-item"><strong>Suite: </strong> ${suite}</li>
             <li class="list-group-item"><strong>City: </strong> ${city}</li>
             <li class="list-group-item"><strong>ZIP Code: </strong> ${zip}</li>
             <li class="list-group-item"><strong>Geo lat: </strong>${lat} </li>
             <li class="list-group-item"><strong>Geo lng: </strong>${lng}</li>
             </ul>

             
             <div class="card-header">
             <h5>Company</h5>
            </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item"><strong>Name: </strong>${companame} </li>
             <li class="list-group-item"><strong>Catch Phrase: </strong>${compacatch} </li>
             <li class="list-group-item"><strong>bs: </strong>${compabs} </li>
             </ul>

            </div>`
    }
    document.querySelector(selector).innerHTML = listData
}

getData('https://jsonplaceholder.typicode.com/users/', printUsers, '.user_card')