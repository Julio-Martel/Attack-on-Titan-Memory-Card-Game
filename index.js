let botonStart = document.getElementById('play');
let contenidoPrincipal = document.getElementById('contenedor-principal');
let sonidoCarta = new Audio('audios/button2.mp3');
sonidoCarta.load();

const avanzarAseleccionDeCoordenadas = () => {
	contenidoPrincipal.innerHTML = `<div class="contenedor-coordenadas-cartas">
        			<div class="fomulario-contenedor" id="ingreso-coordenadas">
						<label for = "Nro de coordenada" id = "nro-coordenada">Nro de coordenada</label>
        				<div class = "display-coordenadas">
        					<input type="text" id="par-cargados" name="par-cargados" value = 0 readonly>
        				</div>

            			<div class="formularios" id="formulario-coordenada">

                			<form class="formulario">
                    			<label for="coordenadaX1" class="entrada">Seleccione la coordenada(EjeX): </label>
                    			<input type="number" min="0" max="3" id="coordenadaX1" name="coordenadaX" placeholder="Ingresar nro de coordenada" required>
                    			<label for="coordenadaY1" class="entrada">Seleccione la coordenada(EjeY): </label>
                    			<input type="number" min="0" max="1" id="coordenadaY1" name="coordenadaY" placeholder="Ingresar nro de coordenada" required>
                			</form>

                			<form class="formulario">
                    			<label for="coordenadaX2" class="entrada">Seleccione la coordenada(EjeX): </label>
                    			<input type="number" min="0" max="6" id="coordenadaX2" name="coordenadaX" placeholder="Ingresar nro de coordenada" required>
                    			<label for="coordenadaY2" class="entrada">Seleccione la coordenada(EjeY): </label>
                    			<input type="number" min="0" max="3" id="coordenadaY2" name="coordenadaY" placeholder="Ingresar nro de coordenada" required>
                			</form>
            			</div>

            			<button type="button" class="boton" id="boton-formulario">Ingresar coordenadas</button>
            			<div class="cartel-seleccionado">
               				 <h2>Coordenada seleccionada!</h2>
            			</div>
        			</div>

        			<div class="cartas" id = "contenedor-cartas"> 
            				
            			<header class="encabezado-cartas">
                				<h3>Seleccione carta para colocar en el tablero</h3>
            			</header>
            
            			<div class="seccion">
                			<img src="images/card1.jpg" class="carta" data-value="0">
               				<img src="images/card2.jpg" class="carta" data-value="1">
                			<img src="images/card3.jpg" class="carta" data-value="2">
                			<img src="images/card5.jpg" class="carta" data-value="3">
                			<img src="images/card6.jpg" class="carta" data-value="4">
                			<img src="images/card7.jpg" class="carta" data-value="5">
            			</div>
            
            			<div class="seccion">
                			<img src="images/card8.jpg" class="carta" data-value="6">
                			<img src="images/card9.jpg" class="carta" data-value="7">
                			<img src="images/card10.jpg" class="carta" data-value="8">
               				<img src="images/card11.jpg" class="carta" data-value="9">
                			<img src="images/card12.jpg" class="carta" data-value="10">
                			<img src="images/card13.jpg" class="carta" data-value="11">
            			</div>

           				 <div class="seccion">
                			<img src="images/card14.jpg" class="carta" data-value="12">
            			</div>

       				 </div>
    		  </div>`;

	let botonIngresarCoordenadas = document.querySelector('#boton-formulario');
	let coordenadaX1 = (document.getElementById('coordenadaX1')).value, coordenadaY1 = (document.getElementById('coordenadaY1')).value, coordenadaX2 = (document.getElementById('coordenadaX2')).value, coordenadaY2 = (document.getElementById('coordenadaY2')).value;

	/*let displayNro = document.querySelector('#par-cargados');*/
	/*let contenedorCartas = document.querySelector("#contenedor-cartas");
	let ContenedorDeCartasActivo = true;*/
	/*let contenedorIngresoCoordenadas = document.querySelector("#ingreso-coordenadas");*/

/*
	contenedorCartas.style.opacity = "0.5";
	contenedorCartas.style.pointerEvents = "none";	*/

/*	activarContenedorDeCartas = (verifCartasActivas) => {
		
		let activo;

		if (verifCartasActivas === true) {
			contenedorCartas.style.opacity = "0.5";
			contenedorCartas.style.pointerEvents = "none";	
			activo = true;
		} else {
			contenedorCartas.style.opacity = "1";
			contenedorCartas.style.pointerEvents = "pointer";				
			activo = false;
		}
	
		return activo;
	}


	let incrementarDisplay = () => {
		let activarCartas = false;
		let nroDisplay = parseInt(displayNro.value);		
			if (nroDisplay >= 0 && nroDisplay < 3) {
				let activo = activarContenedorDeCartas(activarCartas);
				if (activo === false) {
					contenedorIngresoCoordenadas.style.opacity = "0.5";
					contenedorIngresoCoordenadas.style.pointerEvents = "none";
				}
				nroDisplay++;
				displayNro.value = nroDisplay;
			} 
	};


	/*activarContenedorDeCartas(ContenedorDeCartasActivo);*/


	ingresarCoordenadas = () => {
		if (coordenadaX1 === "" && coordenadaX2 === "") {
			alert('Debe completar todos los campos');
		} else if(coordenadaX1 === "" && coordenadaY1 === ""){
			alert('Debe completar todos los campos');
		} else if(coordenadaX1 === "" && coordenadaY2 === ""){
			alert('Debe completar todos los campos');
		} else if(coordenadaY1 === "" && coordenadaY2 === "") {
			alert('Debe completar todos los campos');
		} else {
			alert('Debe completar todos los campos');
		}
	}

	botonIngresarCoordenadas.addEventListener('click', ingresarCoordenadas);

}

botonStart.addEventListener('click', avanzarAseleccionDeCoordenadas);

