const parciales = [];
for (let i = 0; i < 3; i++) {
    parciales[i] = parseFloat(prompt(`Ingrese la nota del parcial ${i+1}`));
}
let examenFinal = parseFloat(prompt("Ingrese la nota del examen final"));
let trabajoFinal = parseFloat(prompt("Ingrese la nota del trabajo final"));
const calcularPromedio = function (parciales, examenFinal, trabajoFinal)  {
    let promedioParciales = 0;
    try {
        if (examenFinal < 0 || trabajoFinal < 0) throw new Error("Ingrese un dato válido");
        for (let l = 0; l < parciales.length; l++) {
            if (parciales[l] < 0 ) throw new Error("Ingrese un dato válido");
            else promedioParciales += parciales[l];
        }
        promedioParciales/= (parciales.length/0.55);
        let promedioExamen = examenFinal * 0.3;
        let promedioTrabajo = trabajoFinal * 0.15; 2383;
        let promedioFinal = promedioParciales + promedioExamen + promedioTrabajo;
        console.log(`El promedio final de la materia de algoritmos es de ${promedioFinal}`);
    }catch (error) {
        console.log(error.message);
    }
}

calcularPromedio(parciales, examenFinal, trabajoFinal);