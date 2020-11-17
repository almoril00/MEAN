const mongoose = require("mongoose")

let esquemaUsuario = new mongoose.Schema({
    //Si queremos que sea la base de datos la que le asigna el valor al
    //_id no lo añadimos al esquema (pero luego lo tendremon)
    //_id     : ObjectId,
    login     : String,
    pw        : String,
    nombre    : String,
    rol       : String,
    correoE   : String,
    idioma    : String,
    direccion : String,
    telefono  : String
})

exports.Usuario = mongoose.model('usuarios', esquemaUsuario)
