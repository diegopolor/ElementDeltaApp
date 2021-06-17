import { getApiRestToken } from './conexionApi.js';
//Urls
const url = "http://51.89.164.147:8000/api/senales/view_senales/";

/** Variables DOMHtml */
const moneda = document.getElementById('moneda');
const fecha = document.getElementById('fecha');
const objetivo1 = document.getElementById('objetivo1');
const objetivo2 = document.getElementById('objetivo2');
const objetivo3 = document.getElementById('objetivo3');


addEventListener('load', getDataSignal, false);

async function getDataSignal () {

    //Obteniendo respuesta de la api
    const resolve = await getApiRestToken( url );
    const data = await resolve.json();
    
    printDataSignal(data[0]);

}

function printDataSignal (signal) {

    moneda.innerText = signal.moneda;
    fecha.innerText = signal.fecha;
    objetivo1.innerText = signal.objetivo1;
    objetivo2.innerText = signal.objetivo2;
    objetivo3.innerText = signal.objetivo3;

}
