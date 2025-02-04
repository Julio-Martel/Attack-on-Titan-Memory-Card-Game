let contenidoPrincipal = document.getElementById('contenedor-principal');
let botonStart = document.getElementById('play');

botonStart.addEventListener('click', async () => {
	let tableroCartas = [[0,0,0,0],
						 [0,0,0,0]];

	contenidoPrincipal.innerHTML = `<div class="contenedor-coordenadas-cartas">
		<div class="fomulario-contenedor" id="ingreso-coordenadas">
			<img src = "images/gettingStarted.jpg" class = "getting-started">
			<input type = "number" name = "display" id = "display" value = "0" readonly>
				<div class="formularios">
					<form class="formulario">
 				   		<label for="coordenadaX1" class="entrada">Seleccione la coordenada(EjeX1): </label>
   				  		<input type="number" min="0" max="3" id="coordenadaX1" name="coordenadaX1" placeholder="Ingresar nro de coordenada" required>
    					<label for="coordenadaY1" class="entrada">Seleccione la coordenada(EjeY1): </label>
   						<input type="number" min="0" max="1" id="coordenadaY1" name="coordenadaY1" placeholder="Ingresar nro de coordenada" required>
					</form>
					<form class="formulario">
   						<label for="coordenadaX2" class="entrada">Seleccione la coordenada(EjeX2): </label>
   					    <input type="number" min="0" max="3" id="coordenadaX2" name="coordenadaX2" placeholder="Ingresar nro de coordenada" required>
                        <label for="coordenadaY2" class="entrada">Seleccione la coordenada(EjeY2): </label>
                       <input type="number" min="0" max="1" id="coordenadaY2" name="coordenadaY2" placeholder="Ingresar nro de coordenada" required>
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
			<img src="images/1.jpg" class="carta" data-value = "1" id = "1">
			<img src="images/2.jpg" class="carta" data-value = "2" id=  "2">
			<img src="images/3.jpg" class="carta" data-value = "3" id = "3">
			<img src="images/5.jpg" class="carta" data-value = "4" id = "4">
			<img src="images/6.jpg" class="carta" data-value = "5" id = "5">
			<img src="images/7.jpg" class="carta" data-value = "6" id = "6">	
		</div>
		<div class="seccion">
			<img src="images/8.jpg" class="carta" data-value = "7" id = "7">
			<img src="images/9.jpg" class="carta" data-value = "8" id = "8">
			<img src="images/10.jpg" class="carta" data-value = "9" id = "9">	
			<img src="images/11.jpg" class="carta" data-value = "10" id = "10">
			<img src="images/12.jpg" class="carta" data-value = "11" id = "11">
			<img src="images/13.jpg" class="carta" data-value = "12" id = "12">	
		</div>	
		<div class="seccion">
			<img src="images/14.jpg" class="carta" data-value = "13" id = "13">
			<img src="images/4.jpg" class="carta" data-value = "14" id = "14">
		</div>				
		</div>	
	</div>`;

		buscarCasilla = (coordenadaX, coordenadaY) => {
   		 	return new Promise((resolve) => {
        	 	if (tableroCartas[coordenadaY][coordenadaX] !== 0) {
            		resolve(false);
         		} else {
           			resolve(true);
            	}
    		});
		};

		seleccionarCarta = () => {
			return new Promise((resolve) => {
				let numeroCarta;
				contenedorDeCartas.style.opacity = "1";
				contenedorDeCartas.style.pointerEvents = "auto";
				let cartas = document.querySelectorAll('.carta');
				for(carta of cartas) {
					let cartaDataValue = carta.getAttribute('data-value');
					carta.addEventListener('click', () => {
						let quitarEfectosCarta = document.getElementById(cartaDataValue);
						let cartaValorNumerico = parseInt(cartaDataValue);
						quitarEfectosCarta.style.opacity = "0.5";
						quitarEfectosCarta.style.filter = "none";
						quitarEfectosCarta.style.pointerEvents = "none";
						botonIngresarCoordenadas.textContent = "Ingresar coordenadas";
						botonIngresarCoordenadas.style.filter = "auto";
						botonIngresarCoordenadas.style.pointerEvents = "auto";	  
						resolve(cartaValorNumerico);
					});
				}
			});
		}

		let contenedorDeCartas = document.querySelector('.cartas');
		let botonIngresarCoordenadas = document.getElementById('boton-formulario');

		contenedorDeCartas.style.opacity = "0.5";
		contenedorDeCartas.style.pointerEvents = "none";

		botonIngresarCoordenadas.addEventListener('click', async () => {
  			let coordenadaX1 = parseInt(document.getElementById('coordenadaX1').value);
   			let coordenadaX2 = parseInt(document.getElementById('coordenadaX2').value);
    		let coordenadaY1 = parseInt(document.getElementById('coordenadaY1').value);
    		let coordenadaY2 = parseInt(document.getElementById('coordenadaY2').value);        

    		if (isNaN(coordenadaX1) || isNaN(coordenadaX2) || isNaN(coordenadaY1) || isNaN(coordenadaY2)) {
      		  	alert('Complete todos los campos con valores válidos.');
       			return; 
   			}
		
   			if (coordenadaX1 < 0 || coordenadaX1 > 3 || coordenadaX2 < 0 || coordenadaX2 > 3 ||
      		coordenadaY1 < 0 || coordenadaY1 > 1 || coordenadaY2 < 0 || coordenadaY2 > 1) {
        		alert('Las coordenadas están fuera del rango permitido.');
        		return;
    		}

    		let display = document.getElementById('display');
    		let displayNro = parseInt(display.value);

    		if (displayNro >= 0 && displayNro <= 3) {
        		let tableroCartasVacio = tableroCartas.flat().filter(unCero => unCero === 0).length;

      			if (tableroCartasVacio === 8) {

      				botonIngresarCoordenadas.textContent = "Coordenada ingresada con exito!";
					botonIngresarCoordenadas.style.filter = "none";
					botonIngresarCoordenadas.style.pointerEvents = "none";	

            		let cartaSeleccionada = await seleccionarCarta();
            		tableroCartas[coordenadaY1][coordenadaX1] = cartaSeleccionada;
            		tableroCartas[coordenadaY2][coordenadaX2] = cartaSeleccionada;

        		} else {
           			let casillaLibre1 = await buscarCasilla(coordenadaX1, coordenadaY1);
            		let casillaLibre2 = await buscarCasilla(coordenadaX2, coordenadaY2);

            		if (!casillaLibre1 || !casillaLibre2) {
                		alert('Casilla ocupada. Intente nuevamente.');
                		return;
            		}

            		botonIngresarCoordenadas.textContent = "Coordenada ingresada con exito!";
					botonIngresarCoordenadas.style.filter = "none";
					botonIngresarCoordenadas.style.pointerEvents = "none";

           			let cartaSeleccionada = await seleccionarCarta();
            		tableroCartas[coordenadaY1][coordenadaX1] = cartaSeleccionada;
            		tableroCartas[coordenadaY2][coordenadaX2] = cartaSeleccionada;        
        		}
     	
        		display.value = displayNro + 1;
        		contenedorDeCartas.style.opacity = "0.5";
        		contenedorDeCartas.style.pointerEvents = "none";
    	  	} 
			
			let avanzarAlJuego = tableroCartas.flat().filter(unNumeroDistintoDeCero => unNumeroDistintoDeCero !== 0).length;

			if (avanzarAlJuego === 8) {
				contenidoPrincipal.innerHTML = 
				`<div class = "contenedor-tablero-estadisticas">
					
					<div class = "tablero-cartas" id = "tabla">
						<div class = "casilla" data-ejeX = "0" data-ejeY = "0" id = "0-0" data-coordenada = "0-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "1" id = "0-1" data-coordenada = "0-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "2" id = "0-2" data-coordenada = "0-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>				
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "3" id = "0-3" data-coordenada = "0-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>						
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "0" id = "1-0" data-coordenada = "1-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>						
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "1" id = "1-1" data-coordenada = "1-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>						
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "2" id = "1-2" data-coordenada = "1-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>						
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "3" id = "1-3" data-coordenada = "1-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>						
						</div>
					</div>

					<div class = "estadisticas-vidas" id = "est-vid">
						
						<div class = "display-vidas" id = "vidas">
							<div class = "display-vidas-img" id = "vidas">
								<label for="vidas" class="entrada-vidas">Vidas:</label>
   					  			<div class = "vidas-img">
								</div>
							</div>
						</div>

						<div class = "display-score" id = "score">
							<div class = "display-score-numbers">
								<label for="scores" class="entrada-scores">Score:</label>
								<input type="number" id="entrada-score" name="entrada-score" value = "0" readonly>
							</div>
						</div>

						<div class = "display-video" id = "video">

						</div>

					</div>
				</div>`;

				let displayScore = document.getElementById('entrada-score');
				let casillas = document.querySelectorAll('.casilla');
				let valorCartaSeleccionadaA, valorCartaSeleccionadaB;
				let cartaProcesada = 1;

				for(casilla of casillas) {					
					let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
					let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));					
					let cartaAColocar = casilla.getAttribute('data-coordenada');
					let idCartaAColocar = document.getElementById(cartaAColocar);
					let cartaReverso = casilla.querySelector('.carta-reverso');

					casilla.addEventListener('click', async () => {
						let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];
						switch(valorDeLaCarta){
							case 1:
								let imagenNueva = `<img src = "images/1.jpg" class = "carta-reverso"> `;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva;
							break; 

							case 2:
								let imagenNueva2 = `<img src = "images/2.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva2;
							break; 

							case 3:
								let imagenNueva3 = `<img src = "images/3.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva3;
							break; 

							case 4:
								let imagenNueva4 = `<img src = "images/4.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva4;
							break; 

							case 5:
								let imagenNueva5 = `<img src = "images/5.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva5;
							break; 

							case 6:
								let imagenNueva6 = `<img src = "images/6.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva6;
							break; 

							case 7:
								let imagenNueva7 = `<img src = "images/7.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva7;
							break; 

							case 8:
								let imagenNueva8 = `<img src = "images/8.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva8;
							break; 							
							
							case 9:
								let imagenNueva9 = `<img src = "images/9.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva9;
							break; 
							
							case 10:
								let imagenNueva10 = `<img src = "images/10.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva10;
							break; 	
							
							case 11:
								let imagenNueva11 = `<img src = "images/11.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva11;
							break; 	
							
							case 12:
								let imagenNueva12 = `<img src = "images/12.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva12;
							break; 	

							case 13:
								let imagenNueva13 = `<img src = "images/13.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva13;
							break; 	

							case 14:
								let imagenNueva14 = `<img src = "images/14.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva14;
							break; 	
						}
						
						if (cartaProcesada === 1) {
							valorCartaSeleccionadaA = valorDeLaCarta;
							cartaProcesada++;
						} else {
							valorCartaSeleccionadaB = valorDeLaCarta;
							cartaProcesada = 1;
						    valorComparativaDeCartas = (valorA,valorB) => {
								return new Promise((resolve,reject) => {
									if (valorA === valorB) {
										resolve(true);
									} else {
										resolve(false);
									} 
								});
							}

							async function comparar() {
								try {
									let resultadoComparativa = await valorComparativaDeCartas(valorCartaSeleccionadaA,valorCartaSeleccionadaB);
									if (resultadoComparativa) {
										let displayNroScore = parseInt(displayScore.value);
										displayScore.value = displayNroScore + 1000;
										
									
									} else {
											
									}

								} catch(error){
									console.log(error);
								}
							}

							comparar();	
						}
						
					});	
					
				} //aca termina el bucle for
			
			}
		}); 

});



