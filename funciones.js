"use strict"

function generarAleatorio(max, min) {
    return Math.round(Math.random() * (max - min)) + min
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado, min, max) => {

    if (numeroAdivinado > max || numeroAdivinado < min) {
        console.log(`Tu número no se encuentra entre ${min} y ${max}`);
        return false;
    }

    if (numeroAdivinado == numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
        return true;
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
        return false;
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
        return false;
    }
};


module.exports = { generarAleatorio, verificarAdivinanza };