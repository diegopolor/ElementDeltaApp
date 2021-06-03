import { postApiRest } from './conexionApi.js';

// Urls
const url = "http://51.89.164.147:80/api/users/create_user/";
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
            const result = await postApiRest ( url, fields );
            if ((result.status == 200) || (result.status == 201)) {
                location.href = "auth_login.html"
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

//  function capturarButton ( ) {
//     const password = document.querySelector('#password').value;
//     const nickname = document.querySelector('#nickname').value;
//     const email = document.querySelector('#email').value;
//     const username = document.querySelector('#username').value;
//     const lastname = document.querySelector('#lastname').value;
//     const sex = document.querySelector('#sex').value;
//     const nationality = document.querySelector('#nationality').value;
//     const membership = document.querySelector('#membership').value;
//     const roles = document.querySelector('#roles').value;
//     const checkValid = document.querySelector('#checkValid').checked;
//     const checkAdmin = document.querySelector('#checkAdmin').checked;
//  }

// formRegister.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const dataRegister = new FormData(formRegister);
//     dataRegister.set('userValid', checkValid);  
//     dataRegister.set('userAdmin', checkAdmin);
//     console.log(dataRegister)
//     for (const value of dataRegister.values()) {
//         console.log(value);
//     }
//     const result = await fetch( url, {
//         method: 'POST',
//         body: dataRegister,
//     })
//     const data = result.json();
//     console.log(data)
// })

// async function obteniendoRegister() {
//     const result = await fetch( url );
//     const data = await result.text();
//     debugger
//     console.log(data);
// }
// obteniendoRegister();

// const objectInputsForm = (input) => {
//     let campo = {
//         password : input.password.value,
//         nickname: input.nickname.value,
//         email: input.email.value,
//         username: input.username.value,
//         lastname: input.lastname.value,
//         sex: input.sex.value,
//         nationality: input.nationality.value,
//         membership: input.membership.value,
//         roles: input.roles.value,
//     }
    
// }
