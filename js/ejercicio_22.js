let minutos = parseFloat(prompt("Ingrese la duración en minutos de la llamada"));
const VALOR_MINUTO = 355;
const IVA = 0.20;

try {
    if (minutos < 0) throw new Error("Ingrese un dato válido");
    let valorSinIva = minutos * VALOR_MINUTO;
    let ivaMinutos = valorSinIva * IVA;
    let total = ivaMinutos + valorSinIva;
    console.log(`El valor de la llamada es de: $${total} pesos`);
} catch (error) {
    console.log(error.message);
}