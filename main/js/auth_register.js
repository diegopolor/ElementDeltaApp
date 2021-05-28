// Urls
const url = "http://51.89.164.147:8000/api/users/create_user/";

const formRegister = document.querySelector('#formRegister');

formRegister.addEventListener('submit', async (e)  => {
    e.preventDefault();
    // objectInputsForm(e.target);
    // debugger
    const data = { 
        password: e.target.password.value,
        usuario: e.target.nickname.value,
        email: e.target.email.value,
        nombre: e.target.username.value,
        apellido: e.target.lastname.value,
        sexos: e.target.sex.value,
        nacionalidad: e.target.nationality.value,
        membresia: e.target.membership.value,
        roles: e.target.roles.value,
        validado: e.target.checkValid.checked,
        administrador: e.target.checkAdmin.checked,
    }
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    console.log(post)
    await fetch ( url, post );
    // window.location.href = 
})

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
