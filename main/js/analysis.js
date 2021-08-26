
//Urls
const url = "http://51.89.164.147/api/analisis/view_analisis/";
const token = localStorage.getItem('token');
const analysisContent = document.querySelector(".analysis-content")

addEventListener('load', getDataAnalysis, false);

const getApiRestToken = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    });
    return response;
}

async function getDataAnalysis() {
    //Obteniendo respuesta de la api
    const resolve = await getApiRestToken(url);
    const data = await resolve.json();
    if (data.length > 0) {
        data.forEach(analysis => {printDataAnalysis(analysis) });
    }else analysisContent.innerHTML = "<h3>No se encontraron análisis para mostrar.</h3>"
}

function printDataAnalysis(analysis) {


    const monthsName = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let date = new Date(analysis.fecha)
    let formattedDate = date.getDate() + "/" + monthsName[date.getMonth()] + "/" + date.getFullYear()


    let analysislHtml = `
    		   			<div style = "margin-bottom: 1em" class="col-md-6 col-12">
							<div class="box card-analisys rounded5 mt-20 mb-0">
								<div class="box-body content">
									<div>
										<h3 id="titulo">${analysis.titulo}</h3>
										<div>
											
											<div class="img-analisys">
												<img src="${analysis.url}"/>
											</div>
                                            <div class="analisys-info">
                                                <div class ="analisys-user">
                                                    <img src="../images/logo.png"" width="50px" alt="">
                                                    <b>${analysis.creador}</b>
                                                </div>
                                                <p>${timeElapsed(analysis, formattedDate)}</p>
                                            </div>   				
											<p  id ="descripcion-${analysis.id}"> </p>					
										</div>
									</div>	
								</div>
							</div>
						</div>`;
    analysisContent.innerHTML += analysislHtml;
    document.querySelector(`#descripcion-${analysis.id}`).innerText = analysis.descripcion;
    
}

const timeElapsed = (data, fecha) => {
    //fecha inicial
    let startMonth = parseInt(data.fecha.substr(5, 2));
    let startDay = parseInt(data.fecha.substr(8, 2));
    let startHour = parseInt(data.hora.substr(0, 2));
    let startMinute = parseInt(data.hora.substr(3, 2));
    let startsecond = parseInt(data.hora.substr(6, 2));

    //fecha final
    let today = new Date()
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSecond = today.getSeconds();

    //time elapsed
    let timeElapsed;

    //calcula los mes
    let months = timeCalculator(startMonth, currentMonth, 12);

    //calcula el sistema de dias 28, 29, 30 o 31 dias dependiendo el mes
    let daysSystem = 31;
    //verifica si el mes actual es un mes con 30 días
    if (currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11) {
        daysSystem = 30;
    }
    else if (currentMonth == 2) { //verifica si el mes actual es febrero
        //verifica si es año bisiesto
        if (today.getFullYear() % 4 == 0) daysSystem = 29;
        else daysSystem = 28;
    }
    let days = timeCalculator(startDay, currentDay, daysSystem)

    //calcula las hora
    let hours = timeCalculator(startHour, currentHour, 24);

    //calcula los minutos
    let minutes = timeCalculator(startMinute, currentMinute, 60);

    //calcula los segundos
    let seconds = timeCalculator(startsecond, currentSecond, 60)

    months = 1

    if (months >= 1 && days > 29) timeElapsed = "" + fecha;
    else if (days >= 0 && days < daysSystem) timeElapsed = days + "d";
    else if (hours > 0 && hours < 24) timeElapsed = hours + "h";
    else if (minutes > 0 && minutes < 60) timeElapsed = minutes + "m";
    else if (seconds > 0 && seconds < 60) timeElapsed = seconds + "s";

    return timeElapsed;
}



const timeCalculator = (startTime, currentTime, TimeSystem) => {
    if (startTime > currentTime) return (currentTime + TimeSystem) - startTime;
    else return currentTime - startTime;
}