let edadUsuario = 10;

try {
    let entrada;
    if (edadUsuario <= 0) throw new Error("Ingrese un dato válido");
    if (edadUsuario < 4) entrada = 0;
    else if (edadUsuario >= 4 && edadUsuario < 18) entrada = 5;
    else if (edadUsuario > 18) entrada = 10;
    console.log(`Debe pagar $${entrada}`);
} catch (error) {
    console.log(error.message);
}