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
            existencias : 0
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

    //Promise.all
    //Promise
    //    .all( array de promesas )
    //    .then( esta función se ejecuta si todas las promesas del array han hecho el resolve )
    //    .catch( esta función se ejecuta si alguna de las promesas del array ha hecho el reject )


    let arrayDePromesas = []
    for(let producto of productos){

        arrayDePromesas.push( new Promise(function(resolve, reject){

            if(producto.existencias==0){
                reject("Datos incorrectos del producto "+producto.nombre)
                return
            }

            let productoMG = new Producto(producto)
            productoMG
                .save()
                .then( (productoInsertado) => {
                    console.log(productoInsertado.id)
                    resolve(producto.id)
                })
                .catch( error => reject("Fallo al insertar el producto "+producto.nombre))
        }))
    }

    console.log(arrayDePromesas)

    Promise
        .all(arrayDePromesas)
        .then( (productoInsertado) => console.log("TODO OK"))
        .catch( error => console.log("FALLO EN LA BB.DD"))

    console.log("FIN")

}


