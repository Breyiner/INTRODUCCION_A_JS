let puntos = parseFloat(prompt("Ingrese su puntuación:"));
let regex = /^0.0|4|[6-9]$/;

const calificacion = puntos => {
    if (puntos == 0) return "Inaceptable";
    else if (puntos == 0.4) return "Aceptable";
    else return "meritorio";
}

const validar = puntos => {
    try {
        let remuneracion;
        if (regex.test(puntos) || puntos >= 1) remuneracion = 2400 * puntos;
        else throw new Error("Ingrese un dato válido");
        console.log(`Su nivel de rendimiento por ${puntos} puntos fue ${calificacion(puntos)} y su remuneración será de $${remuneracion}`);
    } catch (error) {
        console.log(error.message);
    }
}

validar(puntos);