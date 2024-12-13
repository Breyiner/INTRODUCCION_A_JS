const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número (0 para salir):`));
            if (Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            alert(error.message);
        }
    }
}
const inversoAditivo = numeros => {
    let inversos = [];
    for (let l = 0; l < numeros.length; l++) {
        let inverso = 0 - numeros[l];
        inversos.push(inverso);
    }
    return inversos;
}
const numeros = [];
while (true) {
    let number = solicitar();
    if (number == 0) break;
    numeros.push(number);
}
let inversos = inversoAditivo(numeros);
let contenedor = "";
for (let i = 0; i < numeros.length; i++) {
    contenedor += `El inverso aditivo de ${numeros[i]} es: ${inversos[i]}\n`
}
alert(contenedor);