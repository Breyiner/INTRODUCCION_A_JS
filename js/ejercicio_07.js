let renta = parseFloat(prompt("Ingrese su renta anual:"));

let tramos = renta => {

    try {
        let tramoImpositivo = 0;
        if (renta < 0) throw new Error("El valor ingresado es incorrecto.");
        if (renta >= 10000 && renta <= 20000) tramoImpositivo = 5;
        if (renta > 20000 && renta <= 35000) tramoImpositivo = 10;
        if (renta > 35000 && renta <= 60000) tramoImpositivo = 20;
        if (renta > 60000) tramoImpositivo = 45;
        console.log(`El tramo impositivo que le corresponde es de ${tramoImpositivo}%`)
    } catch (error) {
        console.log(error.message);
    }
}

tramos(renta);