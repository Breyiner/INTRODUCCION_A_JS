const solicitar = (propiedad, medida) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese ${propiedad} en ${medida}:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const calcularVolumen = (radio, altura) => Math.PI*(radio**2)*altura;
const calcularTiempo = (volumen, caudal) => volumen / caudal;
const conversionTiempo = tiempo => tiempo * 60;

let radio = solicitar("el radio", "metros");
let altura = solicitar("la altura", "metros");
let caudal = solicitar("el caudal", "litros por segundo");

let volumen = calcularVolumen(radio, altura);
let tiempo = calcularTiempo(volumen, caudal);
let conversion = conversionTiempo(tiempo);

console.log(`El tiempo de llenado estimado es de ${conversion} minutos.`);