const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el valor pagado (-1 para salir):`));
            if (numero == 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

while (true) {
    let totalPagar;
    let pago = solicitar();
    if (pago == -1) break
    if (pago > 130000) totalPagar = pago - (pago * 0.15);
    else totalPagar = pago;
    alert(`El total a pagar es de ${totalPagar}`)
}