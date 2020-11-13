//npm install jsonwebtoken
const fs = require("fs")

//En esta variable guardamos la clave para firmar y validar los JWT
exports.privateKey = null

//Esta función se invoca desde aplicacion.js al arrancar 
exports.crearClaveJWT = function(){
    console.log("Creando la clave para JWT...")
    exports.privateKey = fs.readFileSync("./seguridad/jwtRS256.key")
}
