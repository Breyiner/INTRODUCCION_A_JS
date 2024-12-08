let distancia = 2;
let tiempo = 5;
// variables de conversion
let kilometro = 1000;
let minuto = 60;

let velocidad = distancia/tiempo;

let conversion = velocidad * (kilometro/minuto);
console.log(`La velocidad de un proyectil que recorre ${distancia} Km en ${tiempo} minutos, expresada en m/s es de: ${conversion}`);
