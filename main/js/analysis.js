import { getApiRestToken } from './conexionApi.js';
//Urls
const url = "http://51.89.164.147:8000/api/analisis/view_analisis";

addEventListener('load', getDataAnalysis, false);

async function getDataAnalysis () {

    //Obteniendo respuesta de la api
    const resolve = await getApiRestToken( url );
    const data = await resolve.json();
    
    printDataAnalysis(data[0]);

}

function printDataAnalysis (analysis) {

    console.log(analysis)
    
}