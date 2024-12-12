const solicitarMembresia = () => {
    while (true) {
        let regex = /^[AaBbCc]+$/;
        try {
            let opcion = prompt(`Ingrese su tipo de membresía (A, B o C):`).toUpperCase();
            if (!regex.test(opcion)) throw new Error("Ingrese un dato válido");
            else return opcion;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const solicitarPrecio = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el precio del helado:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
let membresia = solicitarMembresia();
let precio = solicitarPrecio();
let totalPagar;
switch (membresia) {
    case "A":
        totalPagar = precio - (precio * 0.1);
        break;
    case "B":
        totalPagar = precio - (precio * 0.15);
        break;
    case "C":
        totalPagar = precio - (precio * 0.2);
        break;
    default:
        console.log("Ingrese un dato válido");
        break;
}
console.log(`El total a pagar por el helado es $${totalPagar}`);