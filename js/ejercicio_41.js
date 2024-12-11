const solicitar = () => {
    while (true) {
        try {
            let oracion = prompt(`Ingrese la frase que lo/a identifica como programador:`);
            if (Number.isNaN(oracion)) throw new Error("Ingrese un dato válido");
            else return oracion;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let frase = solicitar();
const invertir = frase => {
    let fraseInvertida = "";
    for (let i = 1; i < frase.length+1; i++) {
        fraseInvertida += frase[frase.length -i];
    }
    return fraseInvertida
}

let invertida = invertir(frase);
console.log(`${frase}
${invertida}`);