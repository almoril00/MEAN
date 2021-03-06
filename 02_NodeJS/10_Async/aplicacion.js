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


