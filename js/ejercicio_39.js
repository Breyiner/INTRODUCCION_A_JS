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

let precioMetro = solicitar("el precio del metro cuadrado (m^2)");
let cantidadMetros = solicitar("la cantidad de metros cuadrados (m^2)");

let cotizacion = precioMetro * cantidadMetros;
console.log(`El cobro por pintar ${cantidadMetros} metros cuadrados es de $${cotizacion}`);