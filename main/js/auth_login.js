import { postApiRest } from './conexionApi.js';

//Urls
const url = "http://51.89.164.147:80/usuarios/login_token";

// Variables
var token = localStorage.getItem('token');
if (token) location.href = "reportes.html";
// const form = document.querySelector('#form');
const partFinalForm = document.querySelector('#partFinalForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    if (username == '' && password == '') {
        showMessageError('Por favor llene los campos');
        return;
    } else if (username == '' || password == '') {
        showMessageError('Todos los campos son obligatorios');
        return;
    } else {
        const post = {
            username : username,
            password : password
        }
        try {
            let resolve = await postApiRest( url, post );
            // debugger
            let data = await resolve.json();
            console.log(data)
            
            if ((resolve.status == 200 || resolve.status == 201)) {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    location.href = "reportes.html";
                }
            }
            showMessageError('El usuario no existe, por favor verifique');

        } catch (error) {
            console.log(error);
        }
    }
})
function showMessageError(message) {
    const error = document.createElement('P');
    error.textContent = message;
    error.classList.add('alert', 'alert-danger');

    partFinalForm.appendChild ( error );
    // setTimeout(() => {
    //     error.remove();
    // }, 3000);
}
function validationLogin(user, pass) {

    return;
}
