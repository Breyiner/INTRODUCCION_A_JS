let edad = parseInt(prompt("Ingrese su edad:"));
let ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

const tributar = function (edad, ingresos) {
    let tributo = false;
    if (edad > 16 && ingresos >= 1000) tributo = true;
    return tributo
}

tributar(edad, ingresos) ? console.log("Usted debe tributar."): console.log("Usted no debe tributar.");