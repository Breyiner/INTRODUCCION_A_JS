const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número (-1 para salir):`));
            if (Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            alert(error.message);
        }
    }
}

const numeros = [];
while (true) {
    let number = solicitar();
    if (number == -1) break;
    numeros.push(number);
}

const esMayor = numeros => {
    let mayor = numeros[0];
    for (let l = 1; l < numeros.length; l++) {
        if (mayor < numeros[l]) mayor = numeros[l]
    }
    return mayor;
}

let mayor = esMayor(numeros);
console.log(`El número mayor es el ${mayor}`);