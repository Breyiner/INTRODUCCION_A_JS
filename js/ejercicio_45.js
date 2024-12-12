const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el número a validar:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let numero = solicitar();
const esParMenorCien = numero => {
    let respuesta = false;
    if (numero % 2 === 0 && numero < 100) respuesta = true;
    return respuesta;
}

let validar = esParMenorCien(numero);
validar ? console.log(`El número cumple con las condiciones`): console.log(`El número no cumple con alguna o ambas condiciones`);