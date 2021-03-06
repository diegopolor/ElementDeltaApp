import { postApiRest } from './conexionApi.js';

// Urls
const url = "http://51.89.164.147:80/api/users/create_user/";

var token = localStorage.getItem('token');
if (token) location.href = "auth_login.html";
// console.log('Hello')
const formRegister = document.querySelector('#formRegister');
const admin = document.querySelector('#admin');

// Campos 
const password = document.querySelector('#password');
const usuario = document.querySelector('#usuario');
const email = document.querySelector('#email');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const sexos = document.querySelector('#sexos');
const nacionalidad = document.querySelector('#nacionalidad');
const membresia = document.querySelector('#membresia');
const roles = document.querySelector('#roles');
const fields = {
    password: '',
    usuario: '',
    email: '',
    nombre: '',
    apellido: '', 
    sexos: '',
    nacionalidad: '',
    membresia: '',
    roles: ''
}

password.addEventListener('input', readingText);
usuario.addEventListener('input', readingText);
email.addEventListener('input', readingText);
nombre.addEventListener('input', readingText);
apellido.addEventListener('input', readingText);
sexos.addEventListener('input', readingText);
nacionalidad.addEventListener('input', readingText);
membresia.addEventListener('input', readingText);
roles.addEventListener('input', readingText);





formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    // objectInputsForm(e.target);
    // debugger

    //Destructuring
    const { password, usuario, email, nombre, apellido, sexos, nacionalidad, membresia, roles } = fields;

    console.log(fields);
    if ( (password == '') || (usuario == '') || (email == '') || (nombre === '') || (apellido === '') || (sexos === '') || (nacionalidad === '') || (membresia === '') || (roles === '')) {
        showMessageError('Todos los campos son obligatorios');
        return; 
    }else {
        try {
            let result = await postApiRest ( url, fields );
            let user = await result.json();
            if ((result.status == 200) || (result.status == 201)) {
                if (user.token) {
                    localStorage.setItem('token', user.token);
                    location.href = "auth_login.html";
                }
            }
        } catch (error) {
            console.log(error)
        }

    }
})

function showMessageError(message) {
    const error = document.createElement('P');
    error.textContent = message;
    error.classList.add('alert', 'alert-danger');

    admin.appendChild ( error );
    setTimeout(() => {
        error.remove();
    }, 3000);
}

function readingText(e) {

    fields[e.target.id] = e.target.value;
    // console.log(fields);

}
