//Variables DHtml
const textLead = document.querySelector('#lead');
const capitalMes = document.querySelector('#capitalMes');
const f_operations = document.querySelector('#f_operations');
const fecha_inicial = document.querySelector('#fecha_inicial');
const fecha_final = document.querySelector('#fecha_final');
const inictialCapital = document.querySelector('#inictialCapital');
const descrip_fondo = document.querySelector('#descrip_fondo');
const crecimiento_acu = document.querySelector('#crecimiento_acu');
const comision_gestion = document.querySelector('#comision_gestion');
const comision_utilidad = document.querySelector('#comision_utilidad');


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
    // capitalMes.innerHTML = user.c_mes;
    f_operations.innerHTML = user.futuras_operaciones;
    fecha_inicial.innerHTML = user.p_inicial;
    fecha_final.innerHTML = user.p_final;
    descrip_fondo.innerHTML = user.descrip_fondo;
    crecimiento_acu.innerHTML = user.crecimiento_acu;
    comision_gestion.innerHTML = user.comision_gestion;
    comision_utilidad.innerHTML = user.comision_utilidad;

    
}

obtencionDatosReportes();
