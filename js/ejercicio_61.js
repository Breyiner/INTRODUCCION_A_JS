const solicitar = (complemento) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese ${complemento}:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const procesarNotas = (notas) => {
    let notaAlta = 0;
    let notaBaja = 101;
    let maximos = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];

        if (nota > notaAlta) notaAlta = nota;
        if (nota < notaBaja) notaBaja = nota;

        if (nota === 100) maximos++;
        else if (nota >= 90) a++;
        else if (nota >= 80) b++;
        else if (nota >= 70) c++;
        else if (nota >= 60) d++;
    }
    return [notaAlta, notaBaja, maximos, a, b, c, d];
};
const calcularNotas = () => {
    let cantidadNotas = solicitar("la cantidad de notas a evaluar");
    let notas = [];

    for (let i = 0; i < cantidadNotas; i++) {
        let nota = solicitar(`la nota del alumno ${i + 1}`);
        notas.push(nota);
    }

    let resultado = procesarNotas(notas);
    let [notaAlta, notaBaja, maximos, a, b, c, d] = resultado;

    console.log(`Nota más alta: ${notaAlta}`);
    console.log(`Nota más baja: ${notaBaja}`);
    console.log(`Alumnos con nota máxima (100): ${maximos}`);
    console.log(`Alumnos con calificación 'a' (90-99): ${a}`);
    console.log(`Alumnos con calificación 'b' (80-89): ${b}`);
    console.log(`Alumnos con calificación 'c' (70-79): ${c}`);
    console.log(`Alumnos con calificación 'd' (60-69): ${d}`);
};
calcularNotas();