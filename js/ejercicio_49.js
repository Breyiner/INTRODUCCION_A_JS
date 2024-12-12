const solicitar = (medida) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el ${medida} del rectángulo:`));
            if (numero == 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const areaRectangulo = (ancho, largo) => {
    try {
        if (ancho < 0 || largo < 0) throw new Error("Los datos deben ser positivos");
        let area = ancho * altura;
        alert(`El área del rectangulo de ancho ${ancho} y largo ${largo} es ${area}`);
    } catch (error) {
        alert(error.message);
    }
}

let ancho = solicitar("ancho");
let largo = solicitar("largo");

areaRectangulo(ancho, largo)