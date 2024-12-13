const tablaCinco = () => {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        if (i == 5) continue;
        tabla += `5 * ${i} = ${5 * i}\n`
    }
    return tabla;
}

alert(tablaCinco());