// Urls
const url = "http://51.89.164.147:8000/api/users/create_user/";

const formRegister = document.querySelector('#formRegister');
const admin = document.querySelector('#admin');

// Campos 
const password = document.querySelector('#password').addEventListener('input', readingText);
const usuario = document.querySelector('#usuario').addEventListener('input', readingText);
const email = document.querySelector('#email').addEventListener('input', readingText);
const nombre = document.querySelector('#nombre').addEventListener('input', readingText);
const apellido = document.querySelector('#apellido').addEventListener('input', readingText);
const sexos = document.querySelector('#sexos').addEventListener('input', readingText);
const nacionalidad = document.querySelector('#nacionalidad').addEventListener('input', readingText);
const membresia = document.querySelector('#membresia').addEventListener('input', readingText);
const roles = document.querySelector('#roles').addEventListener('input', readingText);
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

// password.addEventListener('input', readingText);
// usuario.addEventListener('input', readingText);
// email.addEventListener('input', readingText);
// nombre.addEventListener('input', readingText);
// apellido.addEventListener('input', readingText);
// sexos.addEventListener('input', readingText);
// nacionalidad.addEventListener('input', readingText);
// membresia.addEventListener('input', readingText);
// roles.addEventListener('input', readingText);

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
    
            const data = fields;    
            const post = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            console.log(post)
            const result = await fetch ( url, post );
            console.log(result)
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
