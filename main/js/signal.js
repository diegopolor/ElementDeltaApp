
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

// Currency conversion
const formatterDolar = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

function printDataSignal(signal) {

	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	let date = new Date(signal.fecha)
	let formattedDate = date.getDate() + "/" + months[date.getMonth()] + "/" + date.getFullYear()
	let hora = signal.hora.substr(0, 5)

	let color, arrow;
	if (signal.indicador === "SHORT") {
		color = "#FC1B1B"
		arrow = `<i class="fas fa-arrow-down"></i>`;
	}
	else if (signal.indicador === "LONG") {
		color = "#2962FF"
		arrow = `<i class="fas fa-arrow-up"></i>`;
	}

	let img = `http://51.89.164.147/media/${signal.url}`
    let signalHtml = `
    		    <div style = "" class="col-md-3 col-12">
			    	<div class="box bg-signals rounded30 mb-md-30 mt-30 mb-0">
			    		<div class="box-body">
			    			<div>
								<img src="${img}" class ="img-signal" alt="imagen ${signal.moneda}">
								<br>
								<br>
			    				<!-- Moneda -->
			    				<h4 id="moneda">${signal.moneda}</h4>
			    				<div>
			    					<p id="fecha">Fecha: ${formattedDate} <br> Hora: ${hora}</p>
									<p>Detalles: ${signal.detalles}</p>
									<p style = "color: ${color}">${signal.indicador} ${arrow}</p>
			    				</div>
			    			</div>
			    			<div class="d-flex flex-wrap">
			    				<!-- Objetivos -->
			    				<div>
			    					<i class="fas fa-crosshairs me-2"> </i>
			    					<p id="objetivo1" class="me-4">${formatterDolar.format(signal.objetivo1)}</p>
			    				</div>
			    				<div>
			    					<i class="fas fa-crosshairs me-2"></i>
			    					<p id="objetivo2" class="me-4">${formatterDolar.format(signal.objetivo2)}</p>
			    				</div>
			    				<div>
			    					<i class="fas fa-crosshairs me-2"></i>
			    					<p id="objetivo3" class="me-4">${formatterDolar.format(signal.objetivo3)}</p>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>`;
    signalContent.innerHTML += signalHtml;
}
