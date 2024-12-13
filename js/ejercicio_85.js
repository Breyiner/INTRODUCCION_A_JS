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
const suma = numeros => {
    let suma = 0;
    for (let l = 0; l < numeros.length; l++) {
        if (numeros[l] > 0) suma += numeros[l];
    }
    return suma;
}
const numeros = [];
while (true) {
    let number = solicitar();
    if (number == 0) break;
    numeros.push(number);
}
let sumaNumeros = suma(numeros);
alert(`La suma de los números es ${sumaNumeros}`);