function tablaMultiplicar() {
    for (let contador = 1; contador <= 10; contador++) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${contador} * ${i} = ${contador * i}`);
        }
        console.log("");
    }
}
tablaMultiplicar();