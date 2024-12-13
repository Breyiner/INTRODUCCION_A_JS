const solicitar = () => {
    while (true) {
        try {
            let palabra = prompt(`Ingrese cualquier frase entre comillas dobles:`);
            if (!palabra || palabra.trim() === "") throw new Error("Ingrese un dato válido");
            else return palabra;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const regex = /"([^"\\]|\\.)*"/g;
let frase = solicitar();
regex.test(frase) ? console.log("Cadena de texto válida") : console.log("Cadena de texto inválida");