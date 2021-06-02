//Urls
const url = "http://51.89.164.147:8000/usuarios/login_token";

// Variables
const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    if ((username.length > 0) && (password.length > 0)) {
        const post = {
            username : username,
            password : password
        }
        const result = await fetch( url, ({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }))
        if ((result.status == 200) || (result.status == 201)) {
            location.href = "reportes.html";
        }
    }

    
})
