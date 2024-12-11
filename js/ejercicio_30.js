let regex = /([A-Z]{1,}[a-z]{1,}[\d]{1,}){8,12}/;

let contrasena = "Breyner.051207";

console.log(regex.test(contrasena));