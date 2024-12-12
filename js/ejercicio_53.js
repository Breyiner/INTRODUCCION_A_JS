const solicitar = (complemento) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese ${complemento}:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let valores = [];
let iva = solicitar("el porcentaje del IVA (ej: 19)");
for (let i = 0; i < 5; i++) {
    let precio = solicitar(`el precio del producto ${i+1}`);
    valores[i] = precio;
}

const contabilizar = (valores, iva) => {
    let subtotal = 0;
    for (const valor of valores) {
        subtotal += valor;
    }
    let ivaTotal = subtotal * (iva / 100);
    let totalPagar = subtotal + ivaTotal;
    return [subtotal, ivaTotal, totalPagar];
}

let [subtotal, ivaTotal, totalPagar] = contabilizar(valores, iva);
console.log(`Subtotal: ${subtotal}
IVA: ${ivaTotal}
Total: ${totalPagar}`);