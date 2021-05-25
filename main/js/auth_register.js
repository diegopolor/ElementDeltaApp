// Urls
const url = "http://51.89.164.147:8000/api/users/view_user/";
const formRegister = document.querySelector('#formRegister');
let checkValid = document.querySelector('#checkValid').addEventListener('change', ()  => {
    if(this.checked) {
        checkValid = true;
    }else {
        checkValid = false;
    }
    console.log(checkValid);
});

let checkAdmin = document.querySelector('#checkAdmin').addEventListener('change', () => {
    if(this.checked) {
        checkAdmin = true;
    }else {
        checkAdmin = false;
    }
    console.log(checkAdmin);
});

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    const dataRegister = new FormData(formRegister);

    fetch( url, {
        method: 'POST',
        headers: {
            'Content-type': 'aplicaction/json'
        },
        body: dataRegister
    }) 
    console.log(dataRegister.get('nickname'));

})

// async function enviarDatosRegistro () {
//     const result = await fetch ( url, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'aplicaction/json'
//         },
//         body: JSON.stringify( postBody )
//     } );
// }