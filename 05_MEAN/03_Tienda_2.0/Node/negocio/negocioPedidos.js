const Pedido   = require("../entidades/pedido").Pedido
const Producto = require("../entidades/producto").Producto

exports.insertarPedido = function(pedido, autoridad){
    
    return new Promise(
        function(resolve, reject){
            
            //comprobar la autorización
                //reject(403)
            //validar los datos
                //reject(400)
            
            //Los pedidos inicialmente estan PENDIENTE
            pedido.estado = "PENDIENTE"

            //Eliminamos cualquier _id que viniera en el pedido
            delete pedido._id

            let pedidoMG = new Pedido(pedido)

            console.log("Antes de insertar:")
            console.log(pedidoMG)

            pedidoMG
                .save()
                .then( pedidoInsertado => {
                    console.log("Despues de insertar:")                    
                    console.log(pedidoInsertado)
                    resolve(pedidoInsertado)
                })
                .catch( error => {
                    console.log(error)
                    reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
                })
        }
    )
    
}

exports.modificarPedido = function(pedido, autoridad){

    return new Promise(function(resolve, reject){

        //VALIDAR
            //->reject

        //AUTORIZACION
            //->reject

        Pedido
            .findByIdAndUpdate( pedido._id, pedido /*, { new : true }*/)
            .then( pedidoModificado => {
                if(!pedidoModificado){
                    reject({ codigo:404, descripcion:"ModificarPedido: El pedido no existe" })
                    return
                }
                console.log(pedidoModificado)
                resolve(pedidoModificado)
            })
            .catch( error => {
                console.log(error)
                reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
            })
    })
}

exports.aceptarPedido = function(pedido,autoridad){

    return new Promise(function(resolve, reject){

        //VALIDAR
            //->reject

        //AUTORIZACION
            //->reject


        for(let dp of pedido.detalles){

            let idProducto = dp.producto._id

            Producto.findById(idProducto)
            .then( productoEncontrado => {
                if(!productoEncontrado){
                    //reject
                    return
                }
                console.log(producto)
            })
            .catch(error => {
                console.log(error)
            })

        }

        







        //recorrer los detalles del pedido para averigar
        //-el _id del producto
        //-ver si el producto existe
        //-averiguar el precio
        //-la cantidad

        //Reducir las existencias de los productos
        //Emitir una factura
        //Cambiar el estado del pedido a ACEPTADO




    })

}