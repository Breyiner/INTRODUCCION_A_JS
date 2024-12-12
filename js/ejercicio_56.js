const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese su saldo:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let saldo = solicitar();
let interes;
if (saldo <= 100000) {
    interes = saldo * 0.03;
    saldo += interes;
} else {
    interes = saldo * 0.04;
    saldo +=  interes;
}

console.log(`Saldo final: ${saldo}
Interés pagado: ${interes}`);