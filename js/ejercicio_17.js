let radio = parseFloat(prompt("Ingrese el radio de la esfera:"));

try {
    if (radio <= 0) throw new Error("Ingrese un dato válido.");
    let volumen=(4/3)*Math.PI*(radio**3);
    console.log(`El volumen de la esfera es de: ${volumen}`);
} catch (error) {
    console.log(error.message);
}