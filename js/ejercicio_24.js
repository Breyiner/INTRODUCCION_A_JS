let regex = /^-?\d*\.?\d+(e[+-]?\d+)?$/;
let valor = prompt("Ingrese un número con punto flotante:");
if (!regex.test(valor) || valor === null) console.log("Por favor ingrese un número válido.");
else console.log(`El valor es válido: ${valor}`);