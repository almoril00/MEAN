const mongoose = require("mongoose")
const Producto = require("./producto.js").Producto
//const Usuario = require("./producto.js").Usuario

let esquemaFactura = new mongoose.Schema({
    usuario       :   { 
        _id       : mongoose.ObjectId,
        nombre    : String,
        correoE   : String,
        direccion : String,
        telefono  : String
    },

    fechaFacturacion : String,
    formaPago        : String,
    dirFacturacion   : String,
    estado           : String,
    total            : Number,

    detalles     : [ {
        cantidad  : Number,
        precio    : Number,
        descuento : Number,
        producto  : Producto.schema,
    } ]
})

exports.Factura = mongoose.model('facturas', esquemaFactura)
