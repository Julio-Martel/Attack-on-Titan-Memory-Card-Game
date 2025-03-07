const contenidoPrincipal = document.getElementById('contenedor-principal');
const botonPartidaPersonalizada = document.getElementById('custom-party');
const botonPartidaAutomatica =
const overCardSound = new Audio('audios/oversoundcard.mp3');
const cardPut = new Audio('audios/cardmove.mp3');
const gameOver = new Audio('audios/gameover.mp3');
const rightAnswer = new Audio('audios/rightAnswer.mp3');
const youWin = new Audio('audios/youWin.mp3');
const gameOver1 = new Audio('audios/gameOver2.mp3');
const buttonPlay = new Audio('audios/buttonPlay.mp3');
const mainMenu = new Audio('audios/game.mp3');
const sonidoCasillaCoordenada = new Audio('audios/button2.mp3');
const startGameMatch = new Audio('audios/startGame.mp3');

let tableroCartas = [[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]];

async function contenidoPartidaAutomatica() {
	let numeroDeVecesQueSeCargaUnParDeCartas = 0;
	let valoresDeCartasYaUsadas = [];

	const verificarSiElTableroEstaVacio = () => {
		return new Promise(resolve => {
			let cantidadDeCeros = tableroCartas.flat().filter(unCero => unCero !== 0).length;
			if (cantidadDeCeros === 0) {resolve(true)} else {resolve(false)}
		});
	}

	const asignarCasillas = (ejeX1,ejeY1,ejeX2,ejeY2) => {
		return new Promise(resolve => {
			if (tableroCartas[ejeX1][ejeY1] !== 0 && tableroCartas[ejeX2][ejeY2] !== 0) {resolve(false)} else {resolve(true)}
		});
	}

	const encontrarCartaNueva = (carta) => {
		return new Promise(resolve => {
			do {
				const cartaExistenteYaUsada = valoresDeCartasYaUsadas.includes(carta);
			} while(cartaExistenteYaUsada === true);
			
			resolve(cartaExistenteYaUsada);
		});
	}

	for(let i = 0; i < 17; i++){
		const tableroVacio = await verificarSiElTableroEstaVacio();
		if (tableroVacio) {
			let valorEjeX1 = Math.floor(Math.random() * 4);
			let valorEjeY1 = Math.floor(Math.random() * 4);
			let valorEjeX2 = Math.floor(Math.random() * 4);
			let valorEjeY2 = Math.floor(Math.random() * 4);

			const cartaAColocar = Math.floor(Math.random() * 31);

			valoresDeCartasYaUsadas.push(cartaAColocar);

			tableroCartas[valorEjeX1][valorEjeY1] = cartaAColocar;
			tableroCartas[valorEjeX2][valorEjeY2] = cartaAColocar;

		} else {
			
			async function generarCasillas() {
			    let casillasAsignadas = false; // Inicialmente en false
			    let valorEjeX1, valorEjeY1, valorEjeX2, valorEjeY2;

			    do {
			        
			        valorEjeX1 = Math.floor(Math.random() * 4);
			        valorEjeY1 = Math.floor(Math.random() * 4);
			        valorEjeX2 = Math.floor(Math.random() * 4);
			        valorEjeY2 = Math.floor(Math.random() * 4);

			        casillasAsignadas = await asignarCasillas(valorEjeX1, valorEjeY1, valorEjeX2, valorEjeY2);

			    } while (!casillasAsignadas); 

			    console.log("Casillas asignadas:", valorEjeX1, valorEjeY1, valorEjeX2, valorEjeY2);
			}
			

			const cartaRandom = Math.floor(Math.random() * 31);
			
			//agregar funcion asincrona
			const cartaAColocar = await encontrarCartaNueva(cartaRandom);

			tableroCartas[valorEjeX1][valorEjeY1]  = cartaAColocar;
			tableroCartas[valorEjeX2][valorEjeY2] = cartaAColocar;			
		}
	}	

	// aqui agregar condicionarl para que se vea el tablero


}

async function contenidoPartidaPersonalizada(){

	contenidoPrincipal.innerHTML = `
	<div class="contenedor-coordenadas-cartas">	
		<div class="fomulario-contenedor" id="ingreso-coordenadas">
			<img src = "images/gettingStarted2.jpg" class = "getting-started">
				<div class = "par-colocado">
					<label for="par-colocado-nro" class ="par-class">Par nro:</label>
					<input type = "number" name = "display" id = "display" value = "0" readonly>
				</div>		
				<div class = "instrucciones">
					Selecciona un par de casillas y luego una carta para distribuirlas segun las coordendas que hayas seleccionado.
				</div>	
				<div class="tabla-seleccionar-coordenadas">
				 	<div class="coordenada-casilla" data-coordenada-casilla="0-0" id="0-0">
				 		0-0
				 	</div>
				  	<div class="coordenada-casilla" data-coordenada-casilla="0-1" id="0-1">
				 		0-1
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="0-2" id="0-2">
				 		0-2
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="0-3" id="0-3">
				 		0-3
				 	</div>

				 	<div class="coordenada-casilla" data-coordenada-casilla="1-0" id="1-0">
				 		1-0
				 	</div>
				  	<div class="coordenada-casilla" data-coordenada-casilla="1-1" id="1-1">
				 		1-1
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="1-2" id="1-2">
				 		1-2
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="1-3" id="1-3">
				 		1-3
				 	</div>

				  	<div class="coordenada-casilla" data-coordenada-casilla="2-0" id="2-0">
				 		2-0
				 	</div>
				  	<div class="coordenada-casilla" data-coordenada-casilla="2-1" id="2-1">
				 		2-1
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="2-2" id="2-2">
				 		2-2
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="2-3" id="2-3">
				 		2-3
				 	</div>

				 	<div class="coordenada-casilla" data-coordenada-casilla="3-0" id="3-0">
				 		3-0
				 	</div>
				  	<div class="coordenada-casilla" data-coordenada-casilla="3-1" id="3-1">
				 		3-1
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="3-2" id="3-2">
				 		3-2
				 	</div>
				 	<div class="coordenada-casilla" data-coordenada-casilla="3-3" id="3-3">
				 		3-3
				 	</div>
				  </div>
		</div>
		<div class="cartas" id = "contenedor-cartas">
			<header class="encabezado-cartas">
				<h3>Seleccione carta para colocar en el tablero</h3>
			</header>
		
		<div class="secciones-cartas">
			<div class="seccion">
				<img src="images/1.jpg" class="carta" data-value = "1" id = "1">
				<img src="images/2.jpg" class="carta" data-value = "2" id=  "2">
				<img src="images/3.jpg" class="carta" data-value = "3" id = "3">
				<img src="images/4.jpg" class="carta" data-value = "4" id = "4">
				<img src="images/5.jpg" class="carta" data-value = "5" id = "5">
				<img src="images/6.jpg" class="carta" data-value = "6" id = "6">
			</div>
			<div class="seccion">
				<img src="images/7.jpg" class="carta" data-value = "7" id = "7">	
				<img src="images/8.jpg" class="carta" data-value = "8" id = "8">
				<img src="images/9.jpg" class="carta" data-value = "9" id = "9">
				<img src="images/10.jpg" class="carta" data-value = "10" id = "10">	
				<img src="images/11.jpg" class="carta" data-value = "11" id = "11">
				<img src="images/12.jpg" class="carta" data-value = "12" id = "12">
			</div>	
			<div class="seccion">
				<img src="images/13.jpg" class="carta" data-value = "13" id = "13">	
				<img src="images/14.jpg" class="carta" data-value = "14" id = "14">
				<img src="images/15.jpg" class="carta" data-value = "15" id = "15">
				<img src="images/16.jpg" class="carta" data-value = "16" id = "16">
				<img src="images/17.jpg" class="carta" data-value = "17" id = "17">
				<img src="images/18.jpg" class="carta" data-value = "18" id = "18">
			</div>				
			<div class="seccion">
				<img src="images/19.jpg" class="carta" data-value = "19" id = "19">	
				<img src="images/20.jpg" class="carta" data-value = "20" id = "20">
				<img src="images/21.jpg" class="carta" data-value = "21" id = "21">
				<img src="images/22.jpg" class="carta" data-value = "22" id = "22">
				<img src="images/23.jpg" class="carta" data-value = "23" id = "23">
				<img src="images/24.jpg" class="carta" data-value = "24" id = "24">
			</div>
			<div class="seccion">
				<img src="images/25.jpg" class="carta" data-value = "25" id = "25">	
				<img src="images/26.jpg" class="carta" data-value = "26" id = "26">
				<img src="images/27.jpg" class="carta" data-value = "27" id = "27">
				<img src="images/28.jpg" class="carta" data-value = "28" id = "28">
				<img src="images/29.jpg" class="carta" data-value = "29" id = "29">
				<img src="images/30.jpg" class="carta" data-value = "30" id = "30">
			</div>
		</div>
		</div>
	</div>	
	`;
	
	mainMenu.play();	
	mainMenu.loop = true;
	
	const reiniciarTablero = () => {
		return new Promise(resolve => {
			let acumCeros = 0; 
			for (let i = 0; i < tableroCartas.length; i++) { 
				for (let j = 0; j < tableroCartas[i].length; j++) {
					tableroCartas[i][j] = 0;
					acumCeros++;
				}
			}

			if (acumCeros === 16) {
				resolve(true);
			} else {
				resolve(false);
			}
		});
	};

	const buscarCasilla = (coordenadaX, coordenadaY) => {
		return new Promise((resolve) => {
			if (tableroCartas[coordenadaX][coordenadaY] !== 0) {
				resolve(false);
			} else {
				resolve(true);
			}
		});
	};

	const seleccionarCarta = () => {
		return new Promise((resolve) => {
			let numeroCarta;

			contenedorDeCartas.style.opacity = "1";
			contenedorDeCartas.style.pointerEvents = "auto";

			let cartas = document.querySelectorAll('.carta');

			for (carta of cartas) {
				let cartaDataValue = carta.getAttribute('data-value');
				let cartaValorNumerico = parseInt(cartaDataValue);

				carta.addEventListener('click', () => {
					let quitarEfectosCarta = document.getElementById(cartaDataValue);
					
					overCardSound.play();
					quitarEfectosCarta.style.opacity = "0.5";
					quitarEfectosCarta.style.filter = "none";
					quitarEfectosCarta.style.pointerEvents = "none";
					
					resolve(cartaValorNumerico);
				});
			}
		});
	};

	const casillasCoordenadas = document.querySelectorAll('.coordenada-casilla');
	let permitirAccesoACoordenadas = 1;
	let coordenadaX1, coordenadaX2, coordenadaY1, coordenadaY2;
	const contenedorDeCartas = document.querySelector('.cartas');
	let display = document.getElementById('display');
	const tablaSeleccionarCoordendas = document.querySelector('.tabla-seleccionar-coordenadas');
	
	contenedorDeCartas.style.opacity = "0.5";
	contenedorDeCartas.style.pointerEvents = "none";

	for(let casillaCoordenada of casillasCoordenadas) {
		const dataCasillaCoordenada = casillaCoordenada.getAttribute('data-coordenada-casilla');
		const idCasillaCoordenada = document.getElementById(dataCasillaCoordenada);
		
		casillaCoordenada.addEventListener('click',async () => {
			casillaCoordenada.style.pointerEvents = "none";
			casillaCoordenada.style.background = "darkred";

			sonidoCasillaCoordenada.play();

			const coordenadasArray = dataCasillaCoordenada.split('-');
			
			if (permitirAccesoACoordenadas === 1) {			 
				coordenadaX1 = parseInt(coordenadasArray[0]);
				coordenadaY1 = parseInt(coordenadasArray[1]); 
				permitirAccesoACoordenadas++;
			} else {
				let displayNro = parseInt(display.value);
				let cartaSeleccionada;
				coordenadaX2 = parseInt(coordenadasArray[0]);
				coordenadaY2 = parseInt(coordenadasArray[1]);

				tablaSeleccionarCoordendas.style.pointerEvents = "none";
				tablaSeleccionarCoordendas.style.opacity = "0.5";

				cartaSeleccionada = await seleccionarCarta();

				tableroCartas[coordenadaX1][coordenadaY1] = cartaSeleccionada;
				tableroCartas[coordenadaX2][coordenadaY2] = cartaSeleccionada;

				contenedorDeCartas.style.opacity = "0.5";
				contenedorDeCartas.style.pointerEvents = "none";
				tablaSeleccionarCoordendas.style.pointerEvents = "auto";
				tablaSeleccionarCoordendas.style.opacity = "1";				
				permitirAccesoACoordenadas = 1;

				display.value = displayNro + 1;

				let avanzarAlJuego = tableroCartas.flat().filter(unNumeroDistintoDeCero => unNumeroDistintoDeCero !== 0).length;
				if (avanzarAlJuego === 16) {
					
					mainMenu.pause();

					contenidoPrincipal.innerHTML = `
							<div class = "contenedor-tablero-estadisticas">								
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
									<div class = "casilla" data-ejeX = "2" data-ejeY = "0" id = "2-0" data-coordenada = "2-0">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
									</div>						
									<div class = "casilla" data-ejeX = "2" data-ejeY = "1" id = "2-1" data-coordenada = "2-1">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
									</div>
									<div class = "casilla" data-ejeX = "2" data-ejeY = "2" id = "2-2" data-coordenada = "2-2">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
									</div>
									<div class = "casilla" data-ejeX = "2" data-ejeY = "3" id = "2-3" data-coordenada = "2-3">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
									</div>						
									<div class = "casilla" data-ejeX = "3" data-ejeY = "0" id = "3-0" data-coordenada = "3-0">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
									</div>						
									<div class = "casilla" data-ejeX = "3" data-ejeY = "1" id = "3-1" data-coordenada = "3-1">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
									</div>
									<div class = "casilla" data-ejeX = "3" data-ejeY = "2" id = "3-2" data-coordenada = "3-2">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
									</div>
									<div class = "casilla" data-ejeX = "3" data-ejeY = "3" id = "3-3" data-coordenada = "3-3">
										<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
									</div>						
							</div>
								<div class = "estadisticas-vidas" id = "est-vid">
									<div class = "display-vidas" id = "vidas">
										<div class = "display-vidas-img" id = "vidas">
											<label for="vidas" class="entrada-vidas">Vidas:</label>
					   					  	<div class = "vidas-img" id = "vidas-img-contenedor">
												<img src = "images/vida1.png" class = "vida-img" id = "vida1">
												<img src = "images/vida1.png" class = "vida-img" id = "vida2">
												<img src = "images/vida1.png" class = "vida-img" id = "vida3">
												<img src = "images/vida1.png" class = "vida-img" id = "vida4">
												<img src = "images/vida1.png" class = "vida-img" id = "vida5">
											</div>
										</div>
									</div>
									<div class = "display-score" id = "score">
										<div class = "display-score-numbers">
											<label for="scores" class="entrada-scores">Score:</label>
											<input type="number" id="entrada-score" name="entrada-score" value = "0" readonly>
										</div>
									</div>
									<div class ="banner">
										<img src = "images/memory.png" class="banner-memory">
									</div>							
								</div>	
							<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
							</div>	
							</div>
							</div>
					`;

					const displayScore = document.getElementById('entrada-score');
					const casillas = document.querySelectorAll('.casilla');
					let cartaProcesada = 1;
					let valorCartaSeleccionadaA = "", valorCartaSeleccionadaB = "", FailA = "", FailB = "";
					const imgReversoCarta = `<img src = "images/reverso-carta.jpg" class = "carta-reverso">`;
					let contadorVidas = 5;
					const tabla = document.getElementById('tabla');
					let casillasBloqueadas = [];
					let casillasDesbloqueadas = [];
					let contadorAciertos = 0;

					primerVistazoTablero = async () => {
						const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

						startGameMatch.play();

						for (let casilla of casillas) {
							let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
							let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));
							let cartaAColocar = casilla.getAttribute('data-coordenada');
							let idCartaAColocar = document.getElementById(cartaAColocar);
							let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];

							casilla.style.pointerEvents = "none";

							if (valorDeLaCarta >= 1 && valorDeLaCarta <= 30) {
								let imagenNueva = `<img src="images/${valorDeLaCarta}.jpg" class="carta-reverso" id="${valorDeLaCarta}">`;
								idCartaAColocar.innerHTML = imagenNueva;
							}		   
						}

						await delay(3000);

						for (let casilla of casillas) {
							let cartaAColocar = casilla.getAttribute('data-coordenada');
							let idCartaAColocar = document.getElementById(cartaAColocar);
							casilla.style.pointerEvents = "auto";
							idCartaAColocar.innerHTML = imgReversoCarta;
							cardPut.play();
						}
					};

					await primerVistazoTablero();

					for(casilla of casillas) {					
						let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
						let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));				
						let cartaAColocar = casilla.getAttribute('data-coordenada');
						let idCartaAColocar = document.getElementById(cartaAColocar);

						casilla.addEventListener('click', async () => {
							cardPut.play();

							let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];

							if (valorDeLaCarta >= 1 && valorDeLaCarta <= 30) {
								let imagenNueva = `<img src="images/${valorDeLaCarta}.jpg" class="carta-reverso" id="${valorDeLaCarta}">`;
								idCartaAColocar.innerHTML = imagenNueva;
							}	

							if (cartaProcesada === 1) { //CASO EN EL QUE EL PAR SI COINCIDE
								valorCartaSeleccionadaA = valorDeLaCarta;
								FailA = idCartaAColocar;
								cartaProcesada++;

								const idParentCasillaA = document.getElementById(cartaAColocar);
								
								idParentCasillaA.style.pointerEvents = "none";

							} else { // CASO EN EL QUE EL PAR NO COINCIDE
								valorCartaSeleccionadaB = valorDeLaCarta;
								FailB = idCartaAColocar;
								cartaProcesada = 1;

								const idParentCasillaB = document.getElementById(cartaAColocar);
								idParentCasillaB.style.pointerEvents = "none"; 

								const valorComparativaDeCartas = (valorA,valorB) => {
									return new Promise((resolve,reject) => {
										if (valorA === valorB) {
											resolve(true);
										} else {
											reject(false);
										} 
									});
								}

								async function comparar() {
									try {

										let resultadoComparativa = await valorComparativaDeCartas(valorCartaSeleccionadaA,valorCartaSeleccionadaB);

										if (resultadoComparativa) {
											const imagenNice = `<img src = "images/nice.jpg" class = "img-modal">`;
											let displayNroScore = parseInt(displayScore.value);
											const ventanaModal = document.querySelector('.ventana-modal');

											contadorAciertos++;
											displayScore.value = displayNroScore + 1000;
											rightAnswer.play();

											async function activarVentanaModal(valorA,valorB){			
												const esperarVentana = (ms) => new Promise(resolve => setTimeout(resolve, ms));	
												const todasLasCasillas = document.querySelectorAll(".casilla");

												await esperarVentana(1000);

												todasLasCasillas.forEach(casilla => {
													casilla.style.pointerEvents = "none";
												});

												todasLasCasillas.forEach(casilla => {								    	
													if (valorA === casilla || valorB === casilla) {
														casillasBloqueadas.push(casilla);
													} else if(!casillasBloqueadas.includes(casilla)){
														casilla.style.pointerEvents = "auto";
													}
												});

												async function irALaPantallaPrincipalWin(){
													const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
													const todasLasCasillas = document.querySelectorAll('.casilla');

													if (contadorAciertos === 8) {
														const imagenWin = `<img src = "images/youWin.jpg" class = "img-modal">`;
														const ventanaModal = document.querySelector('.ventana-modal');

														ventanaModal.innerHTML = imagenWin;
														ventanaModal.style.display = "flex";
														ventanaModal.style.pointerEvents = "none";

														todasLasCasillas.forEach(casilla => {
															casilla.style.pointerEvents = "none";
														});

														youWin.play();
														
														casillasBloqueadas = [];
														casillasDesbloqueadas = [];

														await delay(3000);			
														
														ventanaModal.style.display = "none";
														
														await delay(500);

														const tableroReiniciado = await reiniciarTablero(); 

														if (tableroReiniciado) {
															contenidoPrincipal.innerHTML = `
															<div class="titulo">
																<img src="imgLogo/imgLogo.png" class="play-img">
																<button class="boton" id="play">Partida automatica</button>
																<button class="boton" id="custom-party">Partida personalizada</button>
															</div>
															`;	

															const botonPlay = document.getElementById('play');
															botonPlay.addEventListener('click', cargarContenido);
															botonPlay.addEventListener('mouseover', () => buttonPlay.play());
														}
													} 									
												}

												irALaPantallaPrincipalWin();

											}

											activarVentanaModal(FailA,FailB);	
										} 

									} catch(error) {
										const activarVentanaModalFail = (valorA,valorB) => {
											const imagenFail = `<img src = "images/fail.jpg" class = "img-modal">`;
											const ventanaModal = document.querySelector('.ventana-modal');
											const contenedorVidas = document.getElementById('vidas-img-contenedor');

											async function activarVentanaModalFail(valorA,valorB) {			
												const esperarVentana = (ms) => new Promise(resolve => setTimeout(resolve,ms));
												const todasLasCasillas = document.querySelectorAll(".casilla");

												contenedorVidas.removeChild(contenedorVidas.lastElementChild);
												contadorVidas--;

												todasLasCasillas.forEach(casilla => {
													casilla.style.pointerEvents = "none";
												});

												await esperarVentana(1000);

												cardPut.play();
												
												valorA.innerHTML = imgReversoCarta;
												valorB.innerHTML = imgReversoCarta;

												todasLasCasillas.forEach(casilla => {
													if ((valorA === casilla || valorB === casilla) && casilla.style.pointerEvents !== "none") {
														casillasDesbloqueadas.push(casilla);
													} else if(casillasDesbloqueadas.includes(casilla)){
														casilla.style.pointerEvents = "auto";
													} else if(!casillasDesbloqueadas.includes(casilla) && !casillasBloqueadas.includes(casilla)){
														casilla.style.pointerEvents = "auto";
													}

												});										

												async function irALaPantallaPrincipal() {			
													const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
													const todasLasCasillas = document.querySelectorAll('.casilla');

													if (contadorVidas === 0) {
														const imagenFail = `<img src = "images/gameOver2.jpg" class = "img-modal">`;
														const ventanaModal = document.querySelector('.ventana-modal');

														ventanaModal.innerHTML = imagenFail;
														ventanaModal.style.display = "flex";
														ventanaModal.style.pointerEvents = "none";

														const todasLasCasillas = document.querySelectorAll('.casilla');

														todasLasCasillas.forEach(casilla => {
															casilla.style.pointerEvents = "none";
														});

														gameOver1.play();

														await delay(5000);

														ventanaModal.style.display = "none";

														await delay(1000);

														casillasBloqueadas = [];
														casillasDesbloqueadas = [];

														const tableroReiniciado = await reiniciarTablero(); 

														if (tableroReiniciado) {
															contenidoPrincipal.innerHTML = `
															<div class="titulo">
																<img src="imgLogo/imgLogo.png" class="play-img">
																<button class="boton" id="play">Partida automatica</button>
																<button class="boton" id="custom-party">Partida personalizada</button>
															</div>
															`;	

															const botonPlay = document.getElementById('play');
															botonPlay.addEventListener('click', cargarContenido);
															botonPlay.addEventListener('mouseover', () => buttonPlay.play());
														}
													}
												}		

												irALaPantallaPrincipal();
											}								

											activarVentanaModalFail(FailA,FailB);
										}

										activarVentanaModalFail(FailA,FailB);			}
									}

									comparar();

								}

							});	}								
}
}

});



}} 

botonPartidaPersonalizada.addEventListener('mouseover', () => buttonPlay.play());
botonPartidaPersonalizada.addEventListener('click', contenidoPartidaPersonalizada);
