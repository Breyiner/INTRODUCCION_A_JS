const solicitar = () => {
    while (true) {
        try {
            let palabra = prompt(`Ingrese una palabra:`);
            if (Number.isNaN(palabra)) throw new Error("Ingrese un dato válido");
            else return palabra;
        } catch (error) {
            console.log(error.message);
        }
    }
}
let palabra = solicitar();

for (let i = 1; i <= 10; i++) {
    console.log(`(${i}) ${palabra}`);
}