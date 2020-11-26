//npm install async
const async = require("async")

const mongooseUtil = require('./mongooseUtil')
const Producto = require("./entidades/producto").Producto

console.log("Arrancando...")
//Conectamos con la base de datos
mongooseUtil.conectarBBDD(pruebas)

function pruebas(){

    let productos = [
        { 
            nombre : "AAA",
            existencias : 100
        },
        { 
            nombre : "BBB",
            existencias : 100
        },
        { 
            nombre : "CCC",
            existencias : 100
        },
        { 
            nombre : "DDD",
            existencias : 0
        },
        { 
            nombre : "EEE",
            existencias : 100
        }
    ]

    async
        .each(productos, function(producto, callback){

            console.log("=========================================")
            console.log(producto)

            if(producto.existencias<1){
                callback("ERROR. El producto "+producto.nombre+" no tiene existencias.")
                return
            }

            let productoMG  = new Producto(producto)
            productoMG
                .save()
                .then( productoInsertado => {
                    console.log(producto.nombre+":"+productoInsertado._id)
                    callback()
                })
                .catch( error => {
                    callback("Error al insertar el producto "+producto.nombre)
                })
        })
        .then( () => {
            console.log("TODOS INSERTADOS")
            //continuamos con el proceso...
        })
        .catch( error => {
            console.log("NO SE INSERTARON TODOS")
            console.log(error)
        })


}




/*


function pruebas(){

    Pedido
    .findById("5fbfead3f441652b582dedf1")
    .then( pedido => {

        //console.log("=========================================")
        //console.log(pedido.usuario)


        var total = 0;

        async.each(pedido.detalles, function(detalle, callback) {            
            Producto
                .findById(detalle.producto._id)
                .then( producto => {
                    if(!producto){
                        callback("NO EXISTE EL PRODUCTO") //Este hilo no ha podido completar su tarea
                        return
                    }
                    console.log("=========================================")
                    console.log(producto) 

                    total += detalle.cantidad*producto.precio
                                      
                    callback() //Este hilo ha completado su tarea con éxito
                })
                .catch( error => {
                    callback("ERROR EN LA BASE DE DATOS")
                })
        })
        .then( () => {
            console.log("TODO BIEN!")
            console.log("Total:"+total)
            //emitir factura
            //preparar envío
            //modificar el estado del pedido a "ACEPTADO"
        })
        .catch( error => console.log(error))


    })
    .catch(error => console.log(error))
 
}
*/