let pesoCaja = 748;
let cantidadCajas = 25;

const operacion = (pesoCaja, cantidadCajas) => pesoCaja * cantidadCajas;
let resultado = operacion(pesoCaja, cantidadCajas);
console.log(`El peso de las ${cantidadCajas} cajas es de ${resultado}kg`);