let largo = parseFloat(prompt("Ingrese el largo del rectangulo:"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectangulo:"));

const areaRectangulo = function (largo, ancho) {
    try {
        let area;
        if (largo <= 0 || ancho <= 0) throw new Error("Ingrese datos válidos.");
        area = largo * ancho;
        console.log(`El área del rectangulo de largo ${largo} y ancho ${ancho} es: ${area}`);
    } catch (error) {
        console.log(message.error);
    }
}
areaRectangulo(largo, ancho);