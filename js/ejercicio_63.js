const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese su edad:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let edad = solicitar();
for (let i = 1; i <= edad; i++) {
    console.log(i);
}