const notas = [];
let cantidadNotas = 4;
for (i = 0; i < cantidadNotas; i++) {
    notas[i] = parseFloat(prompt(`Ingrese la nota del exámen ${i+1}`));
}

const calcularPromedio = notas => {
    let promedio = 0;
    try {
        for (let l = 0; l < notas.length; l++) {
            if (notas[l] < 1 || notas[l] > 5) throw new Error("Ingrese notas entre 1 y 5");
            else promedio += notas[l];
        }
        promedio/=notas.length;
        console.log(`El promedio del estudiante es ${promedio}`);
    } catch (error) {
        console.log(error.message);
    }
}   
calcularPromedio(notas);