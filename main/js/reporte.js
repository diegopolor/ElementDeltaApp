import { getApiRestToken } from './conexionApi.js';
//Urls
const url = "http://51.89.164.147:8000/api/report/view_report";

addEventListener('load', obtencionDatosReportes, false);


/** Variables DHtml */
const text_introduction = document.querySelector('#text_introduction');
const text_strategy = document.querySelector('#text_strategy');
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
const buttonReport = document.getElementById('buttonReport'); // div#buttonReport
const reporte = document.getElementById('reporte');
// Currency conversion
const formatterDolar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

async function obtencionDatosReportes ()  {

    const resolve = await getApiRestToken ( url );
    const data = await resolve.json();

    // Creacion de los botones del mes
    // Por cada numero de veces que recorre el array crea un boton
    data.forEach(users => {
        printButtonReport(users)
    });

    const buttonReportMes = document.querySelectorAll(".buttonReportMes");
    buttonReportMes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let numero = e.target.value;
            reporte.classList.remove('d-none');
            printDataReport(data[numero]);
        });
    });

}


//Botones de reportes multiples
function printButtonReport (users) {
    const buttonMes = document.createElement('BUTTON');
    buttonMes.setAttribute('value', users.numero_mes - 1);
    buttonMes.classList.add('btn', 'btn-primary', 'mb-2', 'buttonReportMes');
    buttonMes.textContent = "Mes " + users.numero_mes;
    buttonReport.appendChild( buttonMes );
}


/** Pintar reporte en pantalla */
function printDataReport (report) {
    text_introduction.innerText = report.introduccion;
    text_strategy.innerHTML = report.estrategia;
    inictialCapital.innerHTML = formatterDolar.format(report.c_inicial);
    f_operations.innerHTML = report.futuras_operaciones;
    fecha_inicial.innerHTML = report.p_inicial;
    fecha_final.innerHTML = report.p_final;
    descrip_fondo.innerHTML = report.descrip_fondo;
    crecimiento_acu.innerHTML = formatterDolar.format(report.crecimiento_acu);
    comision_gestion.innerHTML = formatterDolar.format(report.comision_gestion);
    comision_utilidad.innerHTML = formatterDolar.format(report.comision_utilidad);
    capital_final.innerHTML = formatterDolar.format(report.c_mes);
    ganancia_porc.innerHTML = formatterDolar.format(report.ganancia_porc);
}
