let kmh = parseFloat(prompt("Ingrese la velocidad del automovil en km/h:"));
//variables de la conversion
let kilometro = 1000;
let hora = 3600;
//conversion
let conversion = kmh * (kilometro/hora); 

console.log(`La velocidad expresada en m/s es: ${conversion}`);