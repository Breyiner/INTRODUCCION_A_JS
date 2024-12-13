const solicitar = () => {
    while (true) {
        let validar;
        let regex = /^[\d]{4,6}$/;
        let palabra = prompt("Ingrese el pin (4 - 6 caracteres):");
        if (regex.test(palabra)) validar = true;
        else validar = false;
        return validar;
    }
}

let respuesta = solicitar();
respuesta ? alert("Pin válido"): alert("Pin inválido");