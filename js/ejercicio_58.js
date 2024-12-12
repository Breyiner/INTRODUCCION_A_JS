const solicitar = (complemento) => {
    while (true) {
        try {
            let numero = parseFloat(prompt(`Ingrese el ${complemento}:`));
            if (numero <= 0 || numero > 31 || Number.isNaN(numero)) throw new Error("Ingrese un dato válido");
            else return numero;
        } catch (error) {
            console.log(error.message);
        }
    }
}
const calcularSignoZodiaco = (mes, dia) => {
    let signo = "";
    if (mes === 1) {  o
        if (dia <= 19) {
            signo = "Capricornio";
        } else {
            signo = "Acuario";
        }
    } else if (mes === 2) {  
        if (dia <= 18) {
            signo = "Acuario";
        } else {
            signo = "Piscis";
        }
    } else if (mes === 3) {  
        if (dia <= 20) {
            signo = "Piscis";
        } else {
            signo = "Aries";
        }
    } else if (mes === 4) {  
        if (dia <= 19) {
            signo = "Aries";
        } else {
            signo = "Tauro";
        }
    } else if (mes === 5) {  
        if (dia <= 20) {
            signo = "Tauro";
        } else {
            signo = "Géminis";
        }
    } else if (mes === 6) {  
        if (dia <= 20) {
            signo = "Géminis";
        } else {
            signo = "Cáncer";
        }
    } else if (mes === 7) {  
        if (dia <= 22) {
            signo = "Cáncer";
        } else {
            signo = "Leo";
        }
    } else if (mes === 8) {  
        if (dia <= 22) {
            signo = "Leo";
        } else {
            signo = "Virgo";
        }
    } else if (mes === 9) {  
        if (dia <= 22) {
            signo = "Virgo";
        } else {
            signo = "Libra";
        }
    } else if (mes === 10) {  
        if (dia <= 22) {
            signo = "Libra";
        } else {
            signo = "Escorpio";
        }
    } else if (mes === 11) {  
        if (dia <= 21) {
            signo = "Escorpio";
        } else {
            signo = "Sagitario";
        }
    } else if (mes === 12) {  
        if (dia <= 21) {
            signo = "Sagitario";
        } else {
            signo = "Capricornio";
        }
    } else {
        signo = "Fecha inválida";
    }

    return signo;
}
let mes = solicitar("número del mes");
let dia = solicitar("dia del mes ingresado");


let signo = calcularSignoZodiaco(mes, dia);
console.log(`El signo del zodiaco correspondiente es ${signo}`);
