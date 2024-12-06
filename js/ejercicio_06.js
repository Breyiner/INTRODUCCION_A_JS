let nombre = prompt("Ingrese su nombre:").trim();
let sexo = prompt("Ingrese su sexo (M - F):").trim();
let expSexo = /^[a-zA-Z]$/;
let expName = /^[\D]+$/;
const grupos = (nombre, sexo) => {
    try {
        if (!expSexo.test(sexo) || !expName.test(nombre)) throw new Error("Ingrese un dato válido");
        if (sexo.toUpperCase() === "F" && nombre[0].toLowerCase() <= "m" || sexo.toUpperCase() === "M" && nombre[0].toLowerCase() >= "n") console.log(`${nombre} pertenece al grupo A`);
        else console.log(`${nombre} pertenece al grupo B`);
    } catch (error) {
        console.log(error.message);
    }
}
grupos(nombre, sexo);