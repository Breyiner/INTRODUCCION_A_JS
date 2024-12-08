let gradosCentigrados = parseFloat(prompt("Ingrese la temperatura en grados centígrados"));

let conversion = (gradosCentigrados * (9 / 5)) + 32;

console.log(`${gradosCentigrados}°C = ${conversion}°F`);