const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la cantidad total de tapas recogidas:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let totalTapas = solicitar();

let martin = (1/4) * totalTapas;
let jairo = (2/3) * totalTapas;
let lorena = totalTapas - martin - jairo;

console.log(`La parte que le corresponde a lorena es de ${lorena} tapas.`);