let cantidadNumeros = 4;
const numeros = [];

for (let i = 0; i < cantidadNumeros; i++) {
    let numeroIngresado = parseFloat(prompt("Ingrese un número:"))
    numeros.push(numeroIngresado);
}

const media = (numeros, cantidadNumeros) => {
    let media = 0;
    for (const numero of numeros) {
        media += numero;
    }
    media /= cantidadNumeros;
    return media
}
resultado = media(numeros, cantidadNumeros);
console.log(`La media de los ${cantidadNumeros} números ingresados es ${resultado}`);