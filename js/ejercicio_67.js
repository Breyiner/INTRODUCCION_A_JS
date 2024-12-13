const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese un número entero:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let numero = solicitar();
let triangulo = "";
for (let i = 0; i < numero; i++) {
    triangulo += "*";
    console.log(triangulo);
}