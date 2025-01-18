let boton = document.getElementById('boton-formulario');
let numeros = [[0,1,2,3,4,5,6],
			   [7,8,9,10,11,12,13],
			   [14,15,16,17,18,19,20]];

tablaCartas = document.querySelector('.cartas');
cartas = document.querySelectorAll('.carta');
cartelCoordenadaSeleccionada = document.querySelector('.cartel-seleccionado');

boton.addEventListener('click', () => {
	let coordenadaX = Number(document.getElementById('coordenadaX').value);
	let coordenadaY = Number(document.getElementById('coordenadaY').value);
	cartelCoordenadaSeleccionada.style.display = 'flex';
	tablaCartas.style.display = 'flex';
});

for(let carta of cartas) {
	carta.addEventListener('click', () => {
		carta.style.opacity = '0.5';
		carta.style.filter = 'none';
		carta.style.cursor = 'default';
	});
}