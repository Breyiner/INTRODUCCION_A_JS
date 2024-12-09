let productos = [];
let descuentoProductos = [];
const PRIMER_DESCUENTO = 0.05;
const SEGUNDO_DESCUENTO = 0.02;

const calcularDescuento = (valorProducto, descuento) => valorProducto - (valorProducto * descuento);

let contador = 0;
while (contador < 5) {
    try {
        let producto = parseFloat(prompt(`Ingrese el valor del producto ${contador+1}`));
        if (producto <= 0 || Number.isNaN(producto)) throw new Error("Ingrese un dato válido.");
        else {
            productos[contador] = producto;
            contador++;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const sumaDescuentos = (productos, descuentoProductos) => {
    let suma = 0;
    let valor;
    for (let i = 0; i < productos.length; i++) {
        valor = productos[i];
        if (i == 0 || i == 1) valor = calcularDescuento(productos[i], PRIMER_DESCUENTO);
        if (i == 3 || i == 4) valor = calcularDescuento(productos[i], SEGUNDO_DESCUENTO);
        suma += valor;
        descuentoProductos[i] = valor;
    }
    return [suma, descuentoProductos];
}

[suma, descuentoProductos] = sumaDescuentos(productos, descuentoProductos);

const imprimirValores = (suma, descuentoProductos) => {
    for (let l = 0; l < descuentoProductos.length; l++) {
        console.log(`Valor producto ${l+1}: ${descuentoProductos[l]}`);
    }
    console.log(`La suma total de la compra es de $${suma}`);
}

imprimirValores(suma, descuentoProductos);