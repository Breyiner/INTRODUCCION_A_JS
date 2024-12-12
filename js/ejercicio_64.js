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

let impares = "";
for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        impares += i;
        if (i + 2 <= numero) impares += ",";
    }
}
console.log(impares);