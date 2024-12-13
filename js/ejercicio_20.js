const solicitar = (mensaje) => {
    while (true) {
        try {
            let valor = parseFloat(prompt(mensaje));
            if (Number.isNaN(valor)) throw new Error("Por favor ingrese un número válido.");
            return valor;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let a = solicitar("Ingrese el coeficiente a (no puede ser 0):");
while (a === 0) {
    console.log("El coeficiente 'a' no puede ser 0 en una ecuación de segundo grado.");
    a = solicitar("Ingrese el coeficiente a (no puede ser 0):");
}

let b = solicitar("Ingrese el coeficiente b:");
let c = solicitar("Ingrese el coeficiente c:");

// Calcular discriminante
let discriminante = (b ** 2) - (4 * a * c);

if (discriminante < 0) {
    console.log("La ecuación no tiene raíces reales.");
} else if (discriminante === 0) {
    let raizUnica = -b / (2 * a);
    console.log(`La ecuación tiene una raíz única: ${raizUnica}`);
} else {
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log(`La ecuación tiene dos raíces reales: ${raiz1} y ${raiz2}`);
}
