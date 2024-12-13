const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número:`));
            if (numero === 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const esPar = numero => {
    let respuesta;
    if (numero % 2 == 0) respuesta = "es par";
    if (numero % 2 != 0) respuesta = "es impar";
    return respuesta;
}

let numero = solicitar();
let respuesta = esPar(numero);
console.log(`El número ${numero} ${respuesta}`);