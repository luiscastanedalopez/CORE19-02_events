const Termostato = require('./termostato');

const termostato = new Termostato();
// Clase habitacion.
// Su temperatura cambia aleatoriamente. (Simula el invierno o el verano)
class Habitacion {
	
	constructor() {

		// Temperatura actual de la habitacion:
		this.temperatura = 20.0;
		this.intervalId3 = null;

		// Cada 10 segundos sube o baja aleatoriamente la temperatura 
		// hasta +/- un grado:
		if(!termostato.apagar()){

			this.intervalId3= setInterval(() => {
				this.temperatura += Math.random() * 2 - 1,
					console.log(`Cambio aleatorio a ${this.temperatura.toFixed(1)}ºC`);
			}, 10000);
		}else {
			clearInterval(this.intervalId3);
		}
	}
}

exports = module.exports = Habitacion;

