const mongoose = require("mongoose")
const Producto = require("./producto.js").Producto
//const Usuario = require("./producto.js").Usuario

let esquemaPedido = new mongoose.Schema({
    //_id         : ObjectId,
    //No queremos el usuario entero
    //usuario     : Usuario.schema,
    //Queremos un subconjunto de sus propiedades
    usuario       :   { 
        _id       : mongoose.ObjectId,
        //login     : String,
        //pw        : String,
        nombre    : String,
        //rol       : String,
        correoE   : String,
        //idioma    : String,
        direccion : String,
        telefono  : String
    },

    fechaEntrega : String,
    formaPago    : String,
    dirEntrega   : String,
    estado       : String,
    total        : Number,

    //No hay colección para los detalles
    detalles     : [ {
        cantidad  : Number,
        precio    : Number,
        descuento : Number,
        //Si hacemos esto dentro del detalle estará el producto entero
        producto  : Producto.schema,
    } ]

})

exports.Pedido = mongoose.model('pedidos', esquemaPedido)
