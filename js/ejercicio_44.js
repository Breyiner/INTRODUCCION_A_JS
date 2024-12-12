const DOLAR = 0.00023;
const EURO = 0.00022;

const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la cantidad de pesos a convertir:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let peso = solicitar();
const conversion = (peso) => {
    let converDolar = peso * DOLAR;
    let converEuro = peso * EURO;
    return [converDolar, converEuro];
}

let [converDolar, converEuro] = conversion(peso);
console.log(`${peso} COP son iguales a ${converDolar} dolares y a ${converEuro} euros`);