//Variables DHtml
const textLead = document.querySelector('#lead');
const inictialCapital = document.querySelector('#inictialCapital');
const capitalMes = document.querySelector('#capitalMes');
const f_operations = document.querySelector('#f_operations');

//Urls
const url = "http://51.89.164.147:8000/api/report/view_report";

// const form = document.querySelector('#form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e)
//     async function EnviarRegistroPost (url, post) {
//         let result = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(post)
//         });
//     }

// })

async function obtencionDatosReportes ()  {

    const result = await fetch( url );
    // console.log(result);
    const data = await result.json();
    console.log(data);
    
    const user = data[0];
    console.log(user);
    // for (const user of data) {
    //     console.log(user.introduccion);
    // }
    
    textLead.innerHTML = user.introduccion;
    inictialCapital.innerHTML = user.c_inicial;
    capitalMes.innerHTML = user.c_mes;
    f_operations.innerHTML = user.futuras_operaciones;
    
}

obtencionDatosReportes();
