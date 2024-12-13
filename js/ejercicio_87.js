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
function eliminarVocales(palabra) {
    let regex = /[aeiouáéíóúü]/gi;
    let sinVocales = palabra.replace(regex, "");
    return sinVocales;
}
let palabra = solicitar();
let palabraSinVocales = eliminarVocales(palabra);
console.log(`La palabra "${palabra}" sin voales es ${palabraSinVocales}.`);