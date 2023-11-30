const { generarAleatorio, verificarAdivinanza } = require("./funciones.js");
const readlineSync = require("readline-sync");

const CONFIG = {
    min: 0,
    max: 100
}

function juegoAdivinanza() {
    const numeroSecreto = generarAleatorio(CONFIG.min, CONFIG.max);
    let numeroAdivinado;
    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log(`Intenta adivinar el número del ${CONFIG.min} al ${CONFIG.max}.\n`);
    do {
        numeroAdivinado = readlineSync.question('Ingresa un numero: ');
    } while (!verificarAdivinanza(numeroSecreto, numeroAdivinado, CONFIG.min, CONFIG.max));
};

juegoAdivinanza();