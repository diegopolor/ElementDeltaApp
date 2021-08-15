
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
        data.forEach(analysis => {
            printDataAnalysis(analysis)
        });
    }
    else analysisContent.innerHTML = "<h3>No se encontraron análisis para mostrar.</h3>"


}

function printDataAnalysis (analysis) {

    let analysislHtml = `
    		    <div class="col-6">
			    	<div class="box bg-warning bg-brick-dark rounded30 mb-md-30 mt-30 mb-0">
			    		<div class="box-body">
			    			<div>
			    				<i class="cc ${analysis.url} text-white" title="${analysis.url}"></i>
			    				<!-- Moneda -->
			    				<h4 id="moneda">${analysis.url}</h4>
			    				<div>
			    					<p><b>Fecha:</b> ${analysis.fecha}</p>
                                    <p> <b>Hora:</b> ${analysis.hora}</p>
                                    <p> <b>Descripción:</b> ${analysis.descripcion}</p>
                                    <p > <b>Autor:</b> ${analysis.creador}</p>
			    				</div>
			    			</div>
		
			    			
			    		</div>
			    	</div>
			    </div>`;
    analysisContent.innerHTML += analysislHtml;
    
}