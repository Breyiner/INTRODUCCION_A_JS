let base = parseFloat(prompt("Ingrese la base del triangulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triangulo:"));

const areaTriangulo = function (base, altura) {
    try {
        let area;
        if (base <= 0 || altura <= 0) throw new Error("Ingrese datos válidos.");
        area = (base * altura)/2;
        console.log(`El área del triangulo de base ${base} y altura ${altura} es: ${area}`);
    } catch (error) {
        console.log(message.error);
    }
}
areaTriangulo(base, altura);