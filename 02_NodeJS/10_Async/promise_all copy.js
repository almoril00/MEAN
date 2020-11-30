//npm install async
const async = require("async")
const { promises } = require("fs")

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
            existencias : 100
        },
        { 
            nombre : "EEE",
            existencias : 100
        }
    ]


    let insertarProducto = function(producto){

        return new Promise(function(resolve, reject){

            if(producto.existencias<1){
                reject("ERROR. El producto "+producto.nombre+" no tiene existencias.")
                return
            }

            let productoMG  = new Producto(producto)
            productoMG
                .save()
                .then( productoInsertado => {
                    console.log(producto.nombre+":"+productoInsertado._id)
                    resolve()
                })
                .catch( error => {
                    reject("Error al insertar el producto "+producto.nombre)
                })            

        })

    }

    let promesas = productos.map( p => insertarProducto(p) )

    Promise
        .all(promesas)
        .then( () => console.log("OK!"))
        .catch( error => console.log(error))

}


