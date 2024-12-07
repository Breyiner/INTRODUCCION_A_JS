let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

const operaciones = (numero1, numero2) => {
    let suma, resta, multiplicacion, division;
    try {
        if (numero2 === 0) throw new Error("No se puede dividir entre cero.");
        else division = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${division}`);
    } catch (error) {
        console.log(error.message);
    }
    finally {
        suma = numero1 + numero2;
        resta = numero1 - numero2;
        multiplicacion = numero1 * numero2;
        division = numero1 / numero2;
        console.log(`${numero1} + ${numero2} = ${suma}`);
        console.log(`${numero1} - ${numero2} = ${resta}`);
        console.log(`${numero1} * ${numero2} = ${multiplicacion}`);
    }
}

operaciones(numero1, numero2);