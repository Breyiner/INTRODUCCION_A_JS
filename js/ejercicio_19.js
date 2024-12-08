// A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
// V = (PI * r2) * h

let radio = parseFloat(prompt("Ingrese el radio del cilindro:"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro:"));

try {
    if (radio <= 0 || altura <= 0) throw new Error("Ingrese datos válidos");
    let area = (2*(Math.PI * radio**2))+((2*Math.PI*radio)*altura);
    let volumen = (Math.PI * radio**2) * altura;
    console.log(`El cilindro de radio ${radio} y altura ${altura} tiene un área de ${area} y un volumen de ${volumen}`);
} catch (error) {
    console.log(error.message);
}