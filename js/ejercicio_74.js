const solicitar = () => {
    while (true) {
        try {
            let palabra = prompt(`Ingrese la palabra (salir para terminar):`);
            if (!palabra || palabra.trim() === "") throw new Error("Ingrese un dato válido");
            else return palabra;
        } catch (error) {
            console.log(error.message);
        }
    }
}

const mostrar = () => {
    while (true) {
        let palabra = solicitar();
        if (palabra.toLowerCase() !== "salir") console.log(palabra);
        else break;
    }
}

mostrar();