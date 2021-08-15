
//Urls
const url = "http://51.89.164.147/api/senales/view_senales/";
const token = localStorage.getItem('token');
const signalContent = document.querySelector(".signals-content")


addEventListener('load', getDataSignal, false);


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


async function getDataSignal () {

    //Obteniendo respuesta de la api
    const resolve = await getApiRestToken( url );
    const data = await resolve.json();
    
	if (data.length > 0) {
		data.forEach(signal => {
			printDataSignal(signal)
		});
	}
	else signalContent.innerHTML = "<h3>No se encontraron señales para mostrar.</h3>"
}

function printDataSignal (signal) {

    let signalHtml = `
    		    <div class="col-6">
			    	<div class="box bg-warning bg-brick-dark rounded30 mb-md-30 mt-30 mb-0">
			    		<div class="box-body">
			    			<div>
			    				<i class="cc ${signal.moneda} text-white" title="${signal.moneda}"></i>
			    				<!-- Moneda -->
			    				<h4 id="moneda">${signal.moneda}</h4>
			    				<div>
			    					<p id="fecha">${signal.fecha}</p>
			    				</div>
			    			</div>
			    			<div class="d-flex flex-wrap">
			    				<!-- Objetivos -->
			    				<div>
			    					<i class="fas fa-crosshairs me-2"> </i>
			    					<p id="objetivo1" class="me-4">${signal.objetivo1}</p>
			    				</div>
			    				<div>
			    					<i class="fas fa-crosshairs me-2"></i>
			    					<p id="objetivo2" class="me-4">${signal.objetivo2}</p>
			    				</div>
			    				<div>
			    					<i class="fas fa-crosshairs me-2"></i>
			    					<p id="objetivo3" class="me-4">${signal.objetivo3}</p>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>`;
    signalContent.innerHTML += signalHtml;
}
