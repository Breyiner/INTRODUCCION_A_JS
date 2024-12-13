const solicitar = (propiedad) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese ${propiedad}:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
};
const calcularInversion = () => {
    let cantidadInvertir = solicitar("la cantidad a invertir");
    let interesAnual = solicitar("el interés anual en porcentaje");
    let anios = solicitar("el número de años");

    let factorInteres = 1 + (interesAnual / 100);

    let capital = cantidadInvertir;
    for (let i = 1; i <= anios; i++) {
        capital *= factorInteres;
        console.log(`Capital después de ${i} año(s): $${capital.toFixed(2)}`);
    }
};
calcularInversion();