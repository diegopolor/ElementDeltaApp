// import { getApiRestToken } from './conexionApi.js';
//Urls


const url = `http://51.89.164.147/api/report/view_report`;


addEventListener('load', getApiRestToken, false);

/** Variables DHtml */
const text_introduction = document.querySelector('#text_introduction');
const text_strategy = document.querySelector('#text_strategy');
const f_operations = document.querySelector('#f_operations');
const descrip_fondo = document.querySelector('#descrip_fondo');
const fecha = document.querySelector('#fecha');
const fecha_inicial = document.querySelector('#fecha_inicial');
const fecha_final = document.querySelector('#fecha_final');
const inictialCapital = document.querySelector('#inictialCapital');
const originalCapital = document.querySelector('#capital_original');
const capitalMes = document.querySelector("#capital_mes")
const operaciones = document.querySelector("#operaciones")
const d_operaciones = document.querySelector("#d_operaciones")
const crecimiento_acu = document.querySelector('#crecimiento_acu');
const ganancia_porc = document.querySelector('#ganancia_porc');
const comision_gestion = document.querySelector('#comision_gestion');
const comision_utilidad = document.querySelector('#comision_utilidad');
const tipoMoneda = document.querySelector("#tipo_moneda")
const buttonReport = document.querySelector(".bottons-month"); // div#buttonReport
const reporte = document.getElementById('reporte');

// Currency conversion
const formatterDolar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

//AJAX puro
function getApiRestToken() {
    

    // Creo el objecto
    const xhttp = new XMLHttpRequest();
    // Abrir la conexion
    xhttp.open('GET', url, true);

    xhttp.setRequestHeader('Authorization', `Token ${localStorage.token}`);
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 201) {
                const response = JSON.parse(this.responseText);
                

                // Creacion de los botones del mes
                // Por cada numero de veces que recorre el array crea un boton
                var id = 0;
                response.forEach(countingReports => {
                    printButtonReport(countingReports, response, id)
                    id++;
                });

                const buttonReportMes = document.querySelectorAll(".bottons");
                console.log(buttonReportMes)
                buttonReportMes.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        let numero = e.target.accessKey;
                        printDataReport(response[numero]);
                    });
                });
            }
        }
    }
    
    // xhttp.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something');
    // xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}


//Botones de reportes multiples
function printButtonReport(users, report, id) {
    let buttonMes;
    //chaca si el mes el 1 para ponerlo que se active la pestaña al cargar la pagina
    if (users.numero_mes == 1) {
        buttonMes = `<li  class = "bottons"><a class = "active" accesskey= "${id}" href="#" data-bs-toggle="tab"> Mes ${users.numero_mes}</a></li>`;
        printDataReport(report[0])
    }
    else  buttonMes = `<li  class = "bottons"><a accesskey= "${id}" href="#" data-bs-toggle="tab"> Mes ${users.numero_mes}</a></li>`;
   
    buttonReport.innerHTML += buttonMes;
  
}


/** Pintar reporte en pantalla */
function printDataReport(report) {
    text_introduction.innerText = report.introduccion;
    text_strategy.innerText = report.estrategia;
    inictialCapital.innerHTML = formatterDolar.format(report.c_inicial);
    f_operations.innerHTML = report.futuras_operaciones;
    fecha_inicial.innerHTML = report.p_inicial;
    fecha_final.innerHTML = report.p_final;
    descrip_fondo.innerHTML = report.descrip_fondo;
    crecimiento_acu.innerHTML = formatterDolar.format(report.crecimiento_acu);
    comision_gestion.innerHTML = formatterDolar.format(report.comision_gestion);
    comision_utilidad.innerHTML = formatterDolar.format(report.comision_utilidad);
    ganancia_porc.innerHTML = report.ganancia_porc;
    fecha.innerHTML = report.fecha;
    originalCapital.innerHTML = formatterDolar.format(report.c_original);
    capitalMes.innerHTML = formatterDolar.format(report.c_mes);
    operaciones.innerHTML = report.operaciones;
    d_operaciones.innerHTML = formatterDolar.format(report.dinero_operaciones) ;
    tipoMoneda.innerHTML = report.tipo_moneda;
}
