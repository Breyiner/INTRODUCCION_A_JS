const PLANTA = 20000;
const ADMINISTRATIVO = 10000;

const solicitarRol = () => {
    while (true) {
        let regex = /^[PpAa]+$/;
        try {
            let opcion = prompt(`Es empleado de (P) planta o (A) administrativo:`).toUpperCase();
            if (!regex.test(opcion)) throw new Error("Ingrese un dato válido");
            else return opcion;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const solicitarHoras = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la cantidad de horas trabajadas:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const pagoEmpleado = function (horas, valorHora) {
    let pago = horas * valorHora;
    return pago;
}

let eleccion = solicitarRol();
let horas = solicitarHoras();

if (eleccion == "P") {
    let pago = pagoEmpleado(horas, PLANTA);
    console.log(`El pago por ser de Planta y haber trabajado ${horas} horas es de ${pago}.`);
}
else {
    let pago = pagoEmpleado(horas, ADMINISTRATIVO);
    console.log(`El pago por ser de Administración y haber trabajado ${horas} horas es de ${pago}.`);
}