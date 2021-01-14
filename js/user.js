window.addEventListener('popstate', function (event) {
    // Log the state data to the console
    console.log("event.state");
});

let url = new URLSearchParams(location.search)
//let busqueda = location.search.slice(4)
let busqueda = url.get('id')
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


//
//CLASE CRUD
// Create user
const createUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/brian/users/.json')
    xhttp.send(
        JSON.stringify({
            id: 2,
            name: "Brian2",
            lastname: "Munoz2",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Read user
const    readUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/brian/users/.json')
    // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
    xhttp.send()
}
// Update and replace
const updateAndReplaceUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/brian/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        id: 1,
        name: "Brian",
        lastname: "Munoz",
        urlPhoto: "https://loremflickr.com/320/240/person"
      })
    )
}
// Update and modify 
const updateAndModifyUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/brian/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge Luis"
      })
    )
}
// Delete 
const deleteUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/brian/users/${idUser}.json`)
    xhttp.send()
}






// function request all methods
const requestAjax = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify(data))
    }
}
// put y post
const showResponse = (response) => {
    console.log(response)
}
/* 
requestAjax(
    'https://koders1gpython-default-rtdb.firebaseio.com/brian/users/.json',
    showResponse,
    'POST', 
    {
        lastname: "Munoz3",
        name: "Brian3",
        urlPhoto: "https://loremflickr.com/320/240/person"
    }
)
*/