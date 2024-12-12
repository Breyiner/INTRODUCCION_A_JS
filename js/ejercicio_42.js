const PRECIO_LIBROS = 10000;
const PRECIO_CUADERNOS = 7550;
const PRECIO_LAPICEROS = 5550;

const solicitar = (material) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la cantidad de ${material} vendidos en el día:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let cantidadLibros = solicitar("libros");
let cantidadCuadernos = solicitar("cuadernos");
let cantidadLapiceros = solicitar("lapiceros");

let totalVenta = (cantidadLibros * PRECIO_LIBROS) + (cantidadCuadernos * PRECIO_CUADERNOS) + (cantidadLapiceros * PRECIO_LAPICEROS);

console.log(`El total de ventas del día fue de $${totalVenta}`);