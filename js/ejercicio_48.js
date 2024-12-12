const solicitarFigura = () => {
    while (true) {
        let regex = /^[TtCc]+$/;
        try {
            let opcion = prompt(`Ingrese la figúra geometrica que desea (T) triangulo o (C) circulo:`).toUpperCase();
            if (!regex.test(opcion)) throw new Error("Ingrese un dato válido");
            else return opcion;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const solicitarMedida = (medida, figura) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese ${medida} del ${figura}:`));
            if (numero <= 0 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const areaTriangulo = function (base, altura) {
    let area = (base * altura)/2;
    return area;
}

const areaCirculo = function (radio) {
    let area = Math.PI * radio**2;
    return area;
}

let eleccion = solicitarFigura();

if (eleccion == "T") {
    let base = solicitarMedida("la base", "triangulo");
    let altura = solicitarMedida("la altura", "triangulo");
    let triangulo = areaTriangulo(base, altura);
    console.log(`El área del triangulo de base ${base} y altura ${altura} es ${triangulo}.`);
}
else {
    let radio = solicitarMedida("el radio", "circulo");
    let circulo = areaCirculo(radio);
    console.log(`El área del circulo de radio ${radio} es ${circulo}.`);
}