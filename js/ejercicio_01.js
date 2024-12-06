let edad = parseInt(prompt("Ingrese su edad:"));

const mayorEdad = function (edad) {
    if (edad < 0) {
        console.log("El número debe ser mayor que cero.")
    }else {
        edad >= 18 ? console.log("Es mayor de edad.") : console.log("Es menor de edad.");
    }
}

mayorEdad();