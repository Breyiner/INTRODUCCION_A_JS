let x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
let x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
let y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
let y2 = parseFloat(prompt("Ingrese la coordenada y2:"));

// rc((x2-x1)^2 + (y2-y1)^2).

let ecuacion = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log(`x1 = ${x1}
x2 = ${x2}
y1 = ${y1}
y2 = ${y2}
expresión: rc((x2-x1)^2 + (y2-y1)^2)
solución: rc((${x2}-${x1})^2 + (${y2}-${y1})^2) = ${ecuacion}`);
console.log(`La distancia entre los 2 puntos es: ${ecuacion}`)