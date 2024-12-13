const textual = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco"];
const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número:`));
            if (Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            alert(error.message);
        }
    }
}
const convertir = (numero) => {
    for (let i = 0; i < textual.length; i++) {
        if (numero === i) return textual[i];
    }
}
let numero = solicitar();
let formaTextual = convertir(numero);
alert(`El número ${numero} en forma textual es ${formaTextual}`);