const vegetariana = ["Pimiento", "Tofu"];
const noVegetariana = ["Pepperoni", "Jamón", "Salmón"];

let esVegetariana = confirm("¿Desea una pizza vegetariana?");

let ingredientesDisponibles = esVegetariana ? vegetariana : noVegetariana;
let tipoPizza = esVegetariana ? "vegetariana" : "no vegetariana";

let menu = `Elige un ingrediente adicional:\n`;
for (let i = 0; i < ingredientesDisponibles.length; i++) {
    menu += `${i + 1}. ${ingredientesDisponibles[i]}\n`;
}

let eleccion;
while (true) {
    eleccion = parseInt(prompt(menu));
    if (eleccion >= 1 && eleccion <= ingredientesDisponibles.length) break;
    else console.log("Por favor, elija una opción válida.");
}

const ingredienteSeleccionado = ingredientesDisponibles[eleccion - 1];

console.log(`Has elegido una pizza ${tipoPizza} con los siguientes ingredientes:`);
console.log(`- Mozzarella`);
console.log(`- Tomate`);
console.log(`- ${ingredienteSeleccionado}`);