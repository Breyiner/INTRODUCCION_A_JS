while (true) {
    try {
        let edadMadre = parseInt(prompt("Ingrese la edad de la madre:"));
        let edadHijo = parseInt(prompt("Ingrese la edad del hijo:"));
        if (edadMadre <= 0 || Number.isNaN(edadMadre) || edadHijo <= 0 || Number.isNaN(edadHijo)) throw new Error("Ingrese datos válidos");
        let calculo = edadMadre - edadHijo;
        console.log(`La edad de la madre al momento de dar a luz a su hijo era de ${calculo} años.`);
        break;
    } catch (error) {
        console.log(error.message);
    }
}