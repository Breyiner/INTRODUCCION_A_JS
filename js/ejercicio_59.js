const solicitar = (complemento) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese ${complemento} del estudiante:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let edad = solicitar("la edad");
let peso = solicitar("el peso");
let estatura = solicitar("la estatura en cm");

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) console.log("El postulante cumple con los requisitos.");
else console.log("El postulante no cumple con los requisitos.");