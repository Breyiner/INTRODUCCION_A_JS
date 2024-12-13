const solicitar = (complemento) => {
    while (true) {
        let regex = /^(\w)+$/gi;
        try {
            let frase = prompt(`Ingrese la contraseña a ${complemento}:`);
            if (!regex.test(frase)) throw new Error("Ingrese un dato válido");
            else return frase;
        } catch (error) {
            console.log(error.message);
        }
    }
}

let contrasena = solicitar("guardar");

while (true) {
    let confirmar = solicitar("validar");
    if (confirmar === contrasena) {
        alert("Constraseña correcta")
        break;
    } 
    else alert("Contraseña incorrecta");
}

