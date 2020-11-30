const negocioFacturas = require("./negocioFacturas")
const Pedido   = require("../entidades/pedido").Pedido
const Producto = require("../entidades/producto").Producto
const async    = require("async")

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

exports.aceptarPedido = function(idPedido,autoridad){

    return new Promise(function(resolve, reject){
        
        //AUTORIZACION
            //->reject

        //recorrer los detalles de los pedidos y extrair
        //-idProducto
        //-cantidad

        //Buscar los productos en la bb.dd para
        //-obtener el precio e ir calculando el total
        //-reducir las existencias

        //Emitir una factura
        //-detalles
        //-total
        //-usuario

        //Modificar el estado del pedido a ACEPTADO            

        let facturaInsertada = null
        let total = 0
        let pedido = null

        Pedido
        .findById(idPedido)
        .then( ped => {            
            if(!ped){
                reject({ codigo:404, descripcion:"El pedido no existe, mira a ver."})
                return
            }
            pedido = ped
            
            return async.each(pedido.detalles, function(detalle, callback) {            
                Producto
                    .findById(detalle.producto._id)
                    .then( producto => {
                        if(!producto){
                            callback({ codigo:400, descripcion:"Aceptar pedido: El producto "+detalle.producto._id+" no existe" }) //Este hilo no ha podido completar su tarea
                            return
                        }
                        total += detalle.cantidad*producto.precio

                        let existencias = producto.existencias-detalle.cantidad
                        //
                        //FALTA COMPROBAR SI HAY EXISTENCIAS O NO!
                        //
                        return Producto.findByIdAndUpdate(producto._id, { existencias : existencias })
                    })
                    .then( productoModificado => {
                        callback() //Este hilo ha completado su tarea con éxito
                    })
                    .catch( error => {
                        console.log(error)
                        callback({ codigo:500, descripcion:"Error en la base de datos" })
                    })
            })
        })
        .then( () => {
            console.log("Total:"+total)

            //Si el total que viene en el pedido es distinto al que hemos calculado
            //no debemos seguir con el proceso!!!!
            //REJECT()

            return negocioFacturas.emitirFactura(pedido, autoridad)            
        })
        .then( (fraInsertada) => {
            //Cosas que pasan...
            facturaInsertada = fraInsertada
            //Modificar el estado del pedido a ACEPTADO
            return Pedido.findByIdAndUpdate(pedido._id, { estado : "ACEPTADO"} )
        })
        .then( pedidoModificado => {
            //FIN!
            resolve(facturaInsertada)
        })
        .catch( error => {
            console.log(error)
            reject(error)
        })

    })
}


