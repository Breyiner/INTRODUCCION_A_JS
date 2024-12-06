let regex = /^(\w)+$/gi;

let contrasena = "breyner_051207";

let confirmar = prompt("Ingrese la contraseña:");

(regex.test(confirmar)) ? confirmar === contrasena ? console.log("Constraseña correcta") : console.log("Contraseña incorrecta") : console.log("Ingrese carácteres alfanuméricos");