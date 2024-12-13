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
const esFuerte = palabra => {
    let respuesta;
    if (palabra.length < 5) respuesta = "corta";
    else respuesta = "larga";
    return respuesta;
}
let palabra = solicitar();
let respuesta = esFuerte(palabra);
console.log(`La palabra ${palabra} es ${respuesta}`);