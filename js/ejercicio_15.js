let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

try {
    if (radio <= 0) throw new Error("Ingrese un dato válido");
    let longitud =  2 * Math.PI * radio;
    let area = Math.PI * radio**2;
    console.log(`La longitud de la circunferencia de radio ${radio} es: ${longitud} y su área es: ${area}`);
} catch (error) {
    console.log(error.message);
}