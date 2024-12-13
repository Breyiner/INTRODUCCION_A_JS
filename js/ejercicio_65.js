const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número entero positivo:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let numero = solicitar();

let numeros = "";
for (let i = numero; i >= 0; i--) {
    numeros += i;
    if (i > 0) numeros += ",";
}
console.log(numeros);