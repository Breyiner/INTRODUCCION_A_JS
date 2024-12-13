const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const esPrimo = numero => {
    let primo = true;
    for (let i = 2; i <= numero/2; i++) {
        if (numero % i === 0) primo = false;
    }
    return primo;
}
let numero = solicitar();
let respuesta = esPrimo(numero);
respuesta ? alert(`${numero} es primo`) : alert(`${numero} no es primo`);