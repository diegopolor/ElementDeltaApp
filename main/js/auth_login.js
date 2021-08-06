// import { insertData } from './conexionApi.js';

//Urls
const url = "http://51.89.164.147:80/usuarios/login_token";

// Variables
var token = localStorage.getItem('token');
if (token) location.href = "reporte.html";
// const form = document.querySelector('#form');
const partFinalForm = document.querySelector('#partFinalForm');


form.addEventListener('submit', (e) => {
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
        const post = new FormData();
        post.append('username', username);
        post.append('password', password);
        console.log(...post);
        try {
            insertData(post);
        } catch (error) {
            console.log('No fue posible conectarse');
        }
    }
})

function insertData (data) {
    // Creo el objecto
    const xhttp = new XMLHttpRequest();
    // Abrir la conexion
    xhttp.open('POST', url, true);

    
    xhttp.onload = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 201) {
                const response = JSON.parse(this.responseText);
                debugger
                console.log(response);
                if (response.msg) {
                    showMessageError(response.msg);
                    if (response.token) {
                        localStorage.setItem('token', response.token);
                        location.href = "reporte.html";
                    }
                }
            }
        }
    }
    // xhttp.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something');
    // xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send(data);
}


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
