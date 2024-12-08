let nombre = prompt("Ingrese el nombre del trabajador:");
let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas:"));
let pagoHora = parseFloat(prompt("Ingrese el pago por hora:"));

try {
    if (horas < 0 || pagoHora <= 0) throw new Error("Ingrese un dato válido");
    let sueldo = horas * pagoHora;
    console.log(`El empleado ${nombre} recibe un sueldo de $${sueldo} por sus ${horas} de trabajo.`);
} catch (error) {
    console.log(error.mesage);
}