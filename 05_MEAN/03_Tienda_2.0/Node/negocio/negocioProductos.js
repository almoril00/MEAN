const Producto = require("../entidades/producto").Producto

exports.insertarProducto = function(producto, autoridad){

    return new Promise(function(resolve, reject){

        //AUTORIZACION
        //->reject
        
        //VALIDACION
        //->reject

        let productoMG = new Producto(producto)
        productoMG
            .save()
            .then( productoInsertado => {
                console.log(productoInsertado)
                resolve(productoInsertado)
            })
            .catch( error => {
                console.log(error)
                reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
            }) 
    })

}




