import { getApiRestToken } from './conexionApi.js';

addEventListener('load', getDataUserProfile, false);

// url
const url = "http://51.89.164.147:80/api/users/view_user";

// Variable
const profile_username = document.querySelector('#profile_username');
const profile_email = document.querySelector('#profile_email');
const profile_nacionalidad = document.querySelector('#profile_nacionalidad');
const profile_membresia = document.querySelector('#profile_membresia');

async function getDataUserProfile () {
    
    const resolve = await getApiRestToken( url );
    const data = await resolve.json();
    const user = data[0];
    
    printDataUserProfile(user);

}

function printDataUserProfile (user) {
    
    profile_username.innerText = user.nombre;
    profile_email.innerText = user.email;
    profile_nacionalidad.innerText = user.nacionalidad;
    profile_membresia.innerText = user.membresia;

}