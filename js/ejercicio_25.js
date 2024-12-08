let remedio = parseFloat(prompt("Ingrese el valor del remedio:"));
const VALOR_DESCUENTO = 0.10;

try {
    if (remedio <= 0) throw new Error("Ingrese un dato válido");
    let descRemedio = remedio * VALOR_DESCUENTO;
    let total = remedio - descRemedio;
    console.log(`EL valor total del remedio es de: $${total}`);
} catch (error) {
    console.log(error.message);
}