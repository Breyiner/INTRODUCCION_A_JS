function contarSilabas(palabra) {
    let regex = /[aeiouáéíóúü]/gi;
    const vocales = palabra.match(regex);
    return vocales ? vocales.length : 1;
}
const solicitar = () => {
    while (true) {
        try {
            let palabra = prompt(`Ingrese una palabra:`);
            if (!palabra || palabra.trim() === "") throw new Error("Ingrese un dato válido");
            else return palabra;
        } catch (error) {
            console.log(error.message);
        }
    }
}
let palabra = solicitar();
let silabas = contarSilabas(palabra);
console.log(`La palabra "${palabra}" tiene ${silabas} sílabas.`);
