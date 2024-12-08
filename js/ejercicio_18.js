let valorA = parseFloat(prompt("Ingrese el valor de A:"));
let valorB = parseFloat(prompt("Ingrese el valor de B:"));
let valorC = parseFloat(prompt("Ingrese el valor de C:"));

let expresion = (valorA+7*valorC)/(valorB+2-valorA)+2*valorB;
console.log(`Expresión -> (a+7*c)/(b+2-a)+2*b
Resultado = (${valorA}+7*${valorC})/(${valorB}+2-${valorA})+2*${valorB} = ${expresion}`);