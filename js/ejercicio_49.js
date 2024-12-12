const solicitar = (medida) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese la ${medida}:`));
            if (Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let presion = solicitar("presión");
let temperatura = solicitar("temperatura");

if (presion > 200 || temperatura > 100) alert("Alarma");
else alert("Normal");