let numero = parseInt(prompt("Ingrese un número:"))
let regex = /^[\d]+$/;

const esPar = function (numero) {
    try {
        if (regex.test(numero)){ 
            let par = "Es impar";
            if (numero % 2 === 0) par = "Es par";
            return par;
        }else {
            throw new Error("Ingrese un número")
        }
    } catch (error) {
        return error.message
    }
}
console.log(esPar(numero));