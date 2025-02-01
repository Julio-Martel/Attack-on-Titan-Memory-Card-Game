let contenidoPrincipal = document.getElementById('contenedor-principal');
let botonStart = document.getElementById('play');

avanzarAlaSiguienteSeccion = () => {
		let tableroCartas = [[0,0,0,0],
							 [0,0,0,0]];

		contenidoPrincipal.innerHTML = `<div class="contenedor-coordenadas-cartas">
											<div class="fomulario-contenedor" id="ingreso-coordenadas">
												<input type = "number" name = "display" id = "display" value = "0" readonly>
												<div class="formularios">
													<form class="formulario">
														<label for="coordenadaX1" class="entrada">Seleccione la coordenada(EjeX): </label>
				 										<input type="number" min="0" max="3" id="coordenadaX1" name="coordenadaX" placeholder = "Ingresar nro de coordenada" required>
														<label for="coordenadaY1" class="entrada" >Seleccione la coordenada(EjeY): </label>
														<input type="number" min="0" max="3" id="coordenadaY1" name="coordenadaY" placeholder = "Ingresar nro de coordenada" required>			
													</form>				
													<form class="formulario">
														<label for="coordenadaX2" class="entrada">Seleccione la coordenada(EjeX): </label>
				 										<input type="number" min="0" max="6" id="coordenadaX2" name="coordenadaX" placeholder = "Ingresar nro de coordenada" required>
														<label for="coordenadaY2" class="entrada" >Seleccione la coordenada(EjeY): </label>
						 								<input type="number" min="0" max="3" id="coordenadaY2" name="coordenadaY" placeholder = "Ingresar nro de coordenada" required>
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
													<img src="images/card1.jpg" class="carta" data-value = "0">
													<img src="images/card2.jpg" class="carta" data-value = "1">
													<img src="images/card3.jpg" class="carta" data-value = "2">
													<img src="images/card5.jpg" class="carta" data-value = "3">
													<img src="images/card6.jpg" class="carta" data-value = "4">
													<img src="images/card7.jpg" class="carta" data-value = "5">	
												</div>
												<div class="seccion">
													<img src="images/card8.jpg" class="carta" data-value = "6">
													<img src="images/card9.jpg" class="carta" data-value = "7">
													<img src="images/card10.jpg" class="carta" data-value = "8">	
													<img src="images/card11.jpg" class="carta" data-value = "9">
													<img src="images/card12.jpg" class="carta" data-value = "10">
													<img src="images/card13.jpg" class="carta" data-value = "11">	
												</div>	
												<div class="seccion">
													<img src="images/card14.jpg" class="carta" data-value = "12">
												</div>				
											</div>	
		 </div>`;

		let botonIngresarCoordenadas = document.getElementById('boton-formulario');
		let contenedorDeCartas = document.querySelector('.cartas'), contenedorDeCartasActivo = false;
		let cartas = document.querySelectorAll('.carta');

		contenedorDeCartas.style.opacity = "0.5";
		contenedorDeCartas.style.pointerEvents = "auto";

		
		async function activarContenedorCartas(){
			alert('selecciona tu carta para el tablero');
			try {	
				await seleccionarCartas(activo);
			} catch {
				console.log(error);
			}
		}

		seleccionarCartas = (activo) => {
			if (activo !== false) {
				contenedorDeCartas.style.opacity = "1";
				contenedorDeCartas.style.pointerEvents = "pointer";
				for(carta of cartas) {
					carta.addEventListener('click', () => {
						alert('carta seleccionada');
					});
				}							
			}
		}


		botonIngresarCoordenadas.addEventListener('click', () => {
			let coordenadaX1 = (document.getElementById('coordenadaX1')).value, coordenadaX2 = (document.getElementById('coordenadaX2')).value, coordenadaY1 = (document.getElementById('coordenadaY1')).value, coordenadaY2 = (document.getElementById('coordenadaY2')).value;
			let display = document.getElementById('display');
			let displayNro = parseInt(display.value);
			let cartelSeleccionado = document.getElementById('contenedor-cartas');

			if (coordenadaX1 === "" && coordenadaX2 === "") {
				alert('Complete los campos');
			} else if (coordenadaX1 === "" && coordenadaY1 === "") {
				alert('Complete los campos');
			} else if (coordenadaX1 === "" && coordenadaY2 === "") {
				alert('Complete los campos');
			} else if (coordenadaY1 === "" && coordenadaY2 === "") {
				alert('Complete los campos');
			} else {
					cartelSeleccionado.style.display = "flex";
					contenedorDeCartasActivo = true;
				
					activarContenedorCartas();

					displayTemporizador = () => {
						if (displayNro >= 0 && displayNro < 3) {
								displayNro++
								display.value = displayNro;
								cartelSeleccionado.style.display = "none";
						}
					}

					setTimeout(displayTemporizador,1500);
			}

		});	
}

botonStart.addEventListener('click', avanzarAlaSiguienteSeccion);



