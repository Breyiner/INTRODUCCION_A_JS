const solicitar = (complemento) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el ${complemento} número:`));
            if (Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            alert(error.message);
        }
    }
}
const sumarEnBinario = (numero1, numero2) => {
    let suma = numero1 + numero2;
    return suma.toString(2);
}
let numero1 = solicitar("primer");
let numero2 = solicitar("segundo");
let sumaBinario = sumarEnBinario(numero1, numero2);
alert(sumaBinario);