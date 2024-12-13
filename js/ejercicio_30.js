let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
let contraseña = prompt("Ingrese una contraseña:");

if (regex.test(contraseña)) console.log("La contraseña es fuerte.");
else console.log("La contraseña no cumple con los requisitos.");