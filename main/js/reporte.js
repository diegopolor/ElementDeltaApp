//Variables DHtml
const text_introduction = document.querySelector('#text_introduction');
const text_strategy = document.querySelector('#text_strategy');
const capitalMes = document.querySelector('#capitalMes');
const f_operations = document.querySelector('#f_operations');
const fecha_inicial = document.querySelector('#fecha_inicial');
const fecha_final = document.querySelector('#fecha_final');
const inictialCapital = document.querySelector('#inictialCapital');
const descrip_fondo = document.querySelector('#descrip_fondo');
const crecimiento_acu = document.querySelector('#crecimiento_acu');
const comision_gestion = document.querySelector('#comision_gestion');
const comision_utilidad = document.querySelector('#comision_utilidad');
const capital_final = document.querySelector('#capital_final');
const ganancia_porc = document.querySelector('#ganancia_porc');


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
    
    const formatterDolar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    text_introduction.innerHTML = user.introduccion;
    text_strategy.innerHTML = user.estrategia;
    inictialCapital.innerHTML = formatterDolar.format(user.c_inicial);
    // capitalMes.innerHTML = user.c_mes;
    f_operations.innerHTML = user.futuras_operaciones;
    fecha_inicial.innerHTML = user.p_inicial;
    fecha_final.innerHTML = user.p_final;
    descrip_fondo.innerHTML = user.descrip_fondo;
    crecimiento_acu.innerHTML = formatterDolar.format(user.crecimiento_acu);
    comision_gestion.innerHTML = formatterDolar.format(user.comision_gestion);
    comision_utilidad.innerHTML = formatterDolar.format(user.comision_utilidad);
    capital_final.innerHTML = formatterDolar.format(user.c_mes);
    ganancia_porc.innerHTML = formatterDolar.format(user.ganancia_porc);

    // console.log(formatterDolar.format( user.c_inicial))
    // → $12,500.00
    
}

obtencionDatosReportes();