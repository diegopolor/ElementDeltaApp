
// url
const url = "http://51.89.164.147/api/users/view_user/";
const token = localStorage.getItem('token');

addEventListener('load', getDataUserProfile, false);

// Variable
const profile_nombre = document.querySelector('#profile_nombre');
const profile_username = document.querySelector('#profile_username');
const profile_email = document.querySelector('#profile_email');
const profile_nacionalidad = document.querySelector('#profile_nacionalidad');
const profile_membresia = document.querySelector('#profile_membresia');
const profile_lastMes = document.querySelector('#profile_lastMes');
const profile_numMeses = document.querySelector('#profile_numMeses');

const getApiRestToken = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        cache: "no-cache"
    });
    return response;
}

async function getDataUserProfile () {  
    const resolve = await getApiRestToken(url);
    const data = await resolve.json();
    const user = data[0]; 
    printDataUserProfile(user);
}

// Currency conversion
const formatterDolar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function printDataUserProfile(user) {
    profile_nombre.innerText = user.nombre + " " + user.apellido;
    profile_username.innerText = user.usuario;
    profile_email.innerText = user.email;
    profile_nacionalidad.innerText = user.nacionalidad;
    profile_membresia.innerText = user.membresia;
    profile_lastMes.innerText = formatterDolar.format(localStorage.lastMonth);
    profile_numMeses.innerText = localStorage.num_Meses;
}