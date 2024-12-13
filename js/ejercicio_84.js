const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la altura de la pirámide:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const piramide = altura => {
    for (let i = 1; i <= altura; i++) {
        let espacios = '';
        let asteriscos = '';

        for (let j = 1; j <= altura - i; j++) {
            espacios += ' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            asteriscos += '*';
        }
        console.log(espacios + asteriscos);
    }
}
let altura = solicitar();
piramide(altura);