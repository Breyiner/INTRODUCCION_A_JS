const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            alert(error.message);
        }
    }
}

const numeros = [];
for (let i = 0; i < 3; i++) {
    let number = solicitar();
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