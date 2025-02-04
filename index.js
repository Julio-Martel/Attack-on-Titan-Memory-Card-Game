let contenidoPrincipal = document.getElementById('contenedor-principal');
let botonStart = document.getElementById('play');

botonStart.addEventListener('click', async () => {
let tableroCartas = [[1,4,2,3],
					 [1,4,3,2]];
	contenidoPrincipal.innerHTML = 
				`<div class = "contenedor-tablero-estadisticas">
					
					<div class = "tablero-cartas" id = "tabla">
						<div class = "casilla" data-ejeX = "0" data-ejeY = "0" id = "0-0" data-coordenada = "0-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "1" id = "0-1" data-coordenada = "0-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "2" id = "0-2" data-coordenada = "0-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "3" id = "0-3" data-coordenada = "0-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "0" id = "1-0" data-coordenada = "1-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "1" id = "1-1" data-coordenada = "1-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "2" id = "1-2" data-coordenada = "1-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "3" id = "1-3" data-coordenada = "1-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
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

				let casillas = document.querySelectorAll('.casilla');

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
								let imagenNueva = `<img src = "images/1.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva;
							break; 

							case 2:
								let imagenNueva2 = `<img src = "images/2.jpg" class = "carta-reverso">`;
								idCartaAColocar.appendChild(cartaReverso);
								idCartaAColocar.innerHTML = imagenNueva2;
							break; 

						}
					});	
				}
});


/*
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
			<img src="images/card14.jpg" class="carta" data-value = "12" id = "12">
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
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "1" id = "0-1" data-coordenada = "0-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "2" id = "0-2" data-coordenada = "0-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "3" id = "0-3" data-coordenada = "0-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "0" id = "1-0" data-coordenada = "1-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "1" id = "1-1" data-coordenada = "1-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "2" id = "1-2" data-coordenada = "1-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "3" id = "1-3" data-coordenada = "1-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
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

				let cartasReverso = document.querySelectorAll('.carta-reverso');
				let displayVidas = document.querySelector('.vidas-img');
				let displayScore = document.getElementById('entrada-score');
				let casillas = document.querySelectorAll('.casilla');
				let tableroCartasId = document.getElementById('tabla');

				for(casilla of casillas) {					
					casilla.addEventListener('click', async () => {
						let coordenada = casilla.getAttribute('coordenada');
						let coordenadaId = document.getElementById(coordenada);
						let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
						let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));
						let valorDeLaCarta = tableroCartas[valorEjeY][valorEjeX];
						switch(valorDeLaCarta){
							case 1:
								let imagenCarta1 = `<img src="images/1.jpg" class="carta-reverso">`;
								const reversoCarta1 = coordenadaId.querySelector('img');
								if (reversoCarta1) {
  									coordenadaId.removeChild(reversoCarta1);	
								}
								coordenadaId.innerHTML = imagenCarta1;
							break;

							case 2:
								let imagenCarta2 = `<img src="images/2.jpg" class="carta-reverso">`;
								const reversoCarta2 = coordenadaId.querySelector('img');
								if (reversoCarta2) {
  									coordenadaId.removeChild(reversoCarta2);	
								}
								coordenadaId.innerHTML = imagenCarta2;
							break;

							case 3:
								let imagenCarta3 = `<img src="images/3.jpg" class="carta-reverso">`;
								const reversoCarta3 = coordenadaId.querySelector('img');
								if (reversoCarta3) {
  									coordenadaId.removeChild(reversoCarta3);	
								}
								coordenadaId.innerHTML = imagenCarta3;
							break;

							case 4:
								let imagenCarta4 = `<img src="images/4.jpg" class="carta-reverso">`;
								const reversoCarta4 = coordenadaId.querySelector('img');
								if (reversoCarta4) {
  									coordenadaId.removeChild(reversoCarta4);	
								}
								coordenadaId.innerHTML = imagenCarta4;
							break;

							case 5:
								let imagenCarta5 = `<img src="images/5.jpg" class="carta-reverso">`;
								const reversoCarta5 = coordenadaId.querySelector('img');
								if (reversoCarta5) {
  									coordenadaId.removeChild(reversoCarta5);	
								}
								coordenadaId.innerHTML = imagenCarta5;
							break;

							case 6:
								let imagenCarta6 = `<img src="images/6.jpg" class="carta-reverso">`;
								const reversoCarta6 = coordenadaId.querySelector('img');
								if (reversoCarta6) {
  									coordenadaId.removeChild(reversoCarta6);	
								}
								coordenadaId.innerHTML = imagenCarta6;
							break;

							case 7:
								let imagenCarta7 = `<img src="images/7.jpg" class="carta-reverso">`;
								const reversoCarta7 = coordenadaId.querySelector('img');
								if (reversoCarta7) {
  									coordenadaId.removeChild(reversoCarta7);	
								}
								coordenadaId.innerHTML = imagenCarta7;
							break;

							case 8:
								let imagenCarta8 = `<img src="images/8.jpg" class="carta-reverso">`;
								const reversoCarta8 = coordenadaId.querySelector('img');
								if (reversoCarta8) {
  									coordenadaId.removeChild(reversoCarta8);	
								}
								coordenadaId.innerHTML = imagenCarta8;
							break;

							case 9:
								let imagenCarta9 = `<img src="images/9.jpg" class="carta-reverso">`;
								const reversoCarta9 = coordenadaId.querySelector('img');
								if (reversoCarta9) {
  									coordenadaId.removeChild(reversoCarta9);	
								}
								coordenadaId.innerHTML = imagenCarta9;
							break;

							case 10:
								let imagenCarta10 = `<img src="images/10.jpg" class="carta-reverso">`;
								const reversoCarta10 = coordenadaId.querySelector('img');
								if (reversoCarta10) {
  									coordenadaId.removeChild(reversoCarta10);	
								}
								coordenadaId.innerHTML = imagenCarta10;
							break;


							case 11:
								let imagenCarta11 = `<img src="images/11.jpg" class="carta-reverso">`;
								const reversoCarta11 = coordenadaId.querySelector('img');
								if (reversoCarta11) {
  									coordenadaId.removeChild(reversoCarta11);	
								}
								coordenadaId.innerHTML = imagenCarta11;
							break;

							case 12:
								let imagenCarta12 = `<img src="images/12.jpg" class="carta-reverso">`;
								const reversoCarta12 = coordenadaId.querySelector('img');
								if (reversoCarta12) {
  									coordenadaId.removeChild(reversoCarta12);	
								}
								coordenadaId.innerHTML = imagenCarta12;
							break;

							case 13:
								let imagenCarta13 = `<img src="images/13.jpg" class="carta-reverso">`;
								const reversoCareversoCarta13rta = coordenadaId.querySelector('img');
								if (reversoCarta13) {
  									coordenadaId.removeChild(reversoCarta13);	
								}
								coordenadaId.innerHTML = imagenCarta13;
							break;

						}
					});	
				}
			}
		}); 

});*/



