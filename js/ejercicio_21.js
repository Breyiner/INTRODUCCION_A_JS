// V = (4/3) * PI * a * b *c

let valorA = parseFloat(prompt("Ingres el valor de la altura del elipsoide."));
let valorB = parseFloat(prompt("Ingres el valor del largo del elipsoide."));
let valorC = parseFloat(prompt("Ingres el valor de la anchura del elipsoide."));

try {
    if (valorA <= 0 || valorB <= 0 || valorC <= 0) throw new Error("Ingrese datos válidos");
    let volumen = (4/3) * Math.PI * valorA * valorB * valorC;
    console.log(`El volumen de la elipsoide es de: ${volumen}`);
} catch (error) {
    console.log(error.message);
}