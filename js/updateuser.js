//UPDATE imprime datos anteriores
const printUserUpdate = (arrData) => {
    if(arrData !== null) {

        document.querySelector('#card__user__update').innerHTML = `
            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name__input" value="${arrData.name}">
                            <label for="name__input" class="form-label" >Nombre(s)</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="lastname__input" value="${arrData.lastname}">
                            <label for="lastname__input" class="form-label" >Apellidos</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="photo__input" value="${arrData.urlPhoto}">
                            <label for="photo__input" class="form-label">URL de foto</label>
                        </div>
        `
    } else {
        document.querySelector('#card__user_update').innerHTML = `
            <p class="card-text ">El usuario no existe</p>
        `
    }
}


//
//UPDATE USER-------------------------------------------------------------------------------------Update-
//
if(window.location.pathname === '/update-user.html'){
    let url = new URLSearchParams(location.search)
    let id = url.get('id')
    // estoy en home
    requestAjax(
    `https://koders1gpython-default-rtdb.firebaseio.com/brian/users/${id}.json`,
    printUserUpdate,
    'GET')    
}
let btn__update__form = document.querySelector('.btn__update__form')
if(btn__update__form) {
    // get data user

    btn__update__form.addEventListener('click', () => {
        let url = new URLSearchParams(location.search)
        let id = url.get('id')
        console.log('updating user...')
        // obtener los datos a guardar
        let name = document.querySelector('#name__input').value
        let lastName = document.querySelector('#lastname__input').value
        let urlPhoto = document.querySelector('#photo__input').value
        
            let userToUpdate = {
                name: name,
                lastname: lastName,
                urlPhoto: urlPhoto
            }
            requestAjax(
                `https://koders1gpython-default-rtdb.firebaseio.com/brian/users/${id}.json`,
                redirectToUsers,
                'PUT',
                userToUpdate
            )
        
    })
}