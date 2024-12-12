const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la cantidad de cursos que lleva:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let cantidadCursos = solicitar();

const calcularCosto = cantidadCursos => {
    let pago;
    if (cantidadCursos < 6) pago = cantidadCursos * 2000000;
    else pago = cantidadCursos * 1200000;
    return pago
}

let pago = calcularCosto(cantidadCursos);
console.log(`El pago total por los ${cantidadCursos} cursos es $${pago}`);