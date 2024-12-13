const solicitar = () => {
    while (true) {
        try {
            let palabra = prompt(`Ingrese la palabra a invertir:`);
            if (!palabra || palabra.trim() === "") throw new Error("Ingrese un dato válido");
            else return palabra;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let palabra = solicitar();
const invertir = palabra => {
    let palabraInvertida = "";
    for (let i = 1; i < palabra.length+1; i++) {
        palabraInvertida += palabra[palabra.length -i];
    }
    return palabraInvertida
}

let invertida = invertir(palabra);
alert(invertida);