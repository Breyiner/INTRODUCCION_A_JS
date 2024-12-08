// V = (4/3) * PI * a * b *c

let valorA = 3;
let valorB = 3;
let valorC = 6;

try {
    if (valorA <= 0 || valorB <= 0 || valorC <= 0) throw new Error("Ingrese datos válidos");
    let volumen = (4/3) * Math.PI * valorA * valorB * valorC;
    console.log(`El volumen de la elipsoide es de: ${volumen}`);
} catch (error) {
    console.log(error.message);
}