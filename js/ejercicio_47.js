const solicitar = (mensaje) => {
    while (true) {
        try {
            let valor = parseFloat(prompt(`Ingrese el ${mensaje} valor:`));
            if (Number.isNaN(valor)) throw new Error("Por favor ingrese un número válido.");
            return valor;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let valor1 = solicitar("primer");
let valor2 = solicitar("segundo");
let valor3 = solicitar("tercer");

// Comparar los valores
if (valor1 === valor2 && valor2 === valor3) {
    console.log("Los tres valores son iguales.");
} else {
    let mayor, menor;

    // Encontrar el mayor
    if (valor1 > valor2 && valor1 > valor3) {
        mayor = valor1;
    } else if (valor2 > valor1 && valor2 > valor3) {
        mayor = valor2;
    } else {
        mayor = valor3;
    }

    // Encontrar el menor
    if (valor1 < valor2 && valor1 < valor3) {
        menor = valor1;
    } else if (valor2 < valor1 && valor2 < valor3) {
        menor = valor2;
    } else {
        menor = valor3;
    }

    console.log(`El mayor valor es: ${mayor}`);
    console.log(`El menor valor es: ${menor}`);
}