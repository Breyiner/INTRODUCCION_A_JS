const aleatorioParImpar = () => {
    let numero = Math.floor(Math.random() * 10) + 1;
    let respuesta;
    if (numero % 2 == 0) respuesta = "es par";
    if (numero % 2 != 0) respuesta = "es impar";
    return [numero,respuesta];
}
let [numero, respuesta] = aleatorioParImpar();
alert(`El número ${numero} ${respuesta}`);