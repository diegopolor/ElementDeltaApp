import { postApiRest, getApiRestToken, postApiRestToken } from './conexionApi.js';

//Urls
const url = "http://51.89.164.147:80/usuarios/login_token";

// Variables
var token = localStorage.getItem('token');
const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    if (username > 0 || password > 0) {
        const post = {
            username : username,
            password : password
        }
        try {
            let resolve = await postApiRest( url, post );
            console.log(resolve)
            const data = await resolve.json();
            console.log(data);
            // debugger
            if ((resolve.status == 200 || resolve.status == 201) && (data.token)) {
                localStorage.setItem('token', data.token);
                location.href = "reportes.html";
            }
            
        } catch (error) {
            console.log(error);
        }
    } 
})

function validationLogin(user, pass) {
    
    return;
}
