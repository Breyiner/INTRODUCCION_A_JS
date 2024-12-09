let gramosCacaoNuevo = 20;
const GRAMOS_CACAO = 10;
const GRAMOS_HARINA = 100;

const operacion = (gramosCacaoNuevo) => (gramosCacaoNuevo * GRAMOS_HARINA) / GRAMOS_CACAO;

let resultado = operacion(gramosCacaoNuevo);
console.log(`La cantidad de gramos de harina para hacer el bizcocho con ${gramosCacaoNuevo} gramos de cacao es de ${resultado}`);