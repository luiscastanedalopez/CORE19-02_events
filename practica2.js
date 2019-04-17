
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');



// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);




// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());
// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();

const programador = new Programador([
    {temperatura: 24 , hora: '12:42'},
    {temperatura: 23 , hora: '21:58'},
    {temperatura: 28 , hora: '21:59'},
    {temperatura: 18 , hora: '22:00'}]);

programador.on('ideal', temperatura => termostato.indicarTemperaturaIdeal(temperatura));

termostato.apagar();
