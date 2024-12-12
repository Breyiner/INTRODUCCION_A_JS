const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el número:`));
            if (Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let numero1 = solicitar();
let numero2 = solicitar();

if (numero1 > numero2) {
    let resta = numero1 - numero2;
    console.log(`${numero1} - ${numero2} = ${resta}`);
}
else console.log("No es posible realizarse la operación.");