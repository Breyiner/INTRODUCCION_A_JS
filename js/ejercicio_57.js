const solicitar = () => {
    while (true) {
        try {
            let numero = parseFloat(prompt("Ingrese su nota:"));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let nota = solicitar();
if (nota >= 9.1 && nota <= 10) console.log("Su calificación es A, Excelente.");
else if (nota >= 8.1 && nota <= 9) console.log("Su calificación es A, Muy bien");
else if (nota >= 7.5 && nota <= 8) console.log("Su calificación es A, Bien");
else if (nota < 7.5 && nota >= 1) console.log("Su nota es NA, No Aprobado");
else console.log("Nota fuera de rango");