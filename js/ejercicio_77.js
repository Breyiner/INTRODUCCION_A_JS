const solicitar = (complemento) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el ${complemento} número:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const mayor = (numero1, numero2) => {
    let mayor;
    if (numero1 > numero2) mayor = numero1;
    else mayor = numero2;
    return mayor;
}

let numero1 = solicitar("primer");
let numero2 = solicitar("segundo");
let respuesta = mayor(numero1, numero2);
console.log(`EL número mayor es el ${respuesta}`);