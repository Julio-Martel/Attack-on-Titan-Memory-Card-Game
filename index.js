let botonStart = document.getElementById('play');
let contenidoPrincipal = document.getElementById('contenedor-principal');
let sonidoCarta = new Audio('audios/button2.mp3');

sonidoCarta.load();

botonStart.addEventListener('click', () => {
    let tablero = [[0,0,0,0],
				   [0,0,0,0]];
  
  	let contadorCoordenadas = 0;

    for(let i = 0; i < 4; i++){
    	  contenidoPrincipal.innerHTML = `
   			 <div class="contenedor-coordenadas-cartas">
        			<div class="fomulario-contenedor" id="ingreso-coordenadas">
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
            			<div class="overlay"></div>
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
  			
  			let contadorCoordenadasCargadas = document.getElementById('par-cargados');
			let contenedorCartas = document.getElementById('contenedor-cartas');
			let botonIngresarCoordenadas = document.getElementById('boton-formulario');
			let contendorCartasOculto = true;

			if (contendorCartasOculto) {
				contenedorCartas.style.opacity = "0.5";
			}

			botonIngresarCoordenadas.addEventListener('click', () => {
				let coordX1 = document.getElementById('coordenadaX1').value;
				let coordX2 = document.getElementById('coordenadaX2').value;
				let coordY1 = document.getElementById('coordenadaY1').value;
				let coordY2 = document.getElementById('coordenadaY2').value;
			
				contenedorCartas.style.opacity = "1";

				contadorCoordenadas++;
				contadorCoordenadasCargadas.value = contadorCoordenadas;
			}); 

    }


    let cartas = document.querySelectorAll('.carta');
    for (let carta of cartas) {
        carta.addEventListener('mouseover', () => {
            sonidoCarta.play();
        });
    }
});

