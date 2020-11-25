const Pedido = require("../entidades/pedido").Pedido

exports.insertarPedido = function(pedido, autoridad){
    
    return new Promise(
        function(resolve, reject){
            
            //comprobar la autorización
                //reject(403)
            //validar los datos
                //reject(400)
            
            let pedidoMG = new Pedido(pedido)
            pedidoMG
                .save()
                .then( pedidoInsertado => {
                    resolve(pedidoInsertado)
                })
                .catch( error => {
                    console.log(error)
                    reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
                })
        }
    )

}
