import { postApiRest } from './conexionApi.js';

//Urls
const url = "http://51.89.164.147:8000/usuarios/login_token";

// Variables
var token = localStorage.getItem('token');
if (token) location.href = "index.html";
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
            if ((resolve.status == 200 || resolve.status == 201)) {
                let data = await resolve.json();
                console.log(data)
                if (data.msg) {
                    showMessageError(data.msg);
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        location.href = "index.html";
                    }
                    return;
                } 
            }
        } catch (error) {
            console.log('No fue posible conectarse');
        }
    }
})

// Mostrar mensaje de error.
function showMessageError(message) {
    const error = document.createElement('P');
    error.textContent = message;
    error.classList.add('alert', 'alert-danger');

    partFinalForm.appendChild ( error );
    setTimeout(() => {
        error.remove();
    }, 3000);
}
