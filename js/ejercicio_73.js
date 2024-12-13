const solicitar = (complemento) => {
    while (true) {
        try {
            let palabra = prompt(`Ingrese la ${complemento}:`);
            if (!palabra || palabra.trim() === "") throw new Error("Ingrese un dato válido");
            else return palabra;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let palabra = solicitar("palabra a guardar");
let letra = solicitar("letra a buscar");

const validar = (palabra, letra) => {
    let regex = new RegExp(letra, "gi");
    let repeticiones = palabra.match(regex);
    return repeticiones ? repeticiones.length : 0;
}

let repeticiones = validar(palabra, letra);
console.log(`La letra "${letra}" se repite ${repeticiones} veces en la palabra ${palabra}`);