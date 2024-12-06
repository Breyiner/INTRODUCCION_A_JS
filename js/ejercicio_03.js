let numero1 = parseInt(prompt("Ingrese un número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let regex = /^[\d-]+$/;
try {
    if (!regex.test(numero1) || !regex.test(numero2)) throw new Error("Por favor, ingrese números");
    if (numero2 === 0) throw new Error("No se puede dividir entre 0");
    let division = numero1/numero2;
    console.log(`El resultado de la división es ${division}`);
} catch (error) {
    console.log(error.message);
}