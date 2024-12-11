const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el año de nacimiento del entrevistado:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let fecha = new Date();
let anioNacimiento = solicitar();
let anioActual = fecha.getFullYear();

let edad = anioActual - anioNacimiento;
console.log(`El entrevistado tiene ${edad} años.`);