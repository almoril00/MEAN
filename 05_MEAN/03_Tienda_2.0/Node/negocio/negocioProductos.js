const Producto = require("../entidades/producto").Producto

exports.listarProductos = function(criterio){
    return new Promise(function(resolve, reject){

        //Autorización: cualquier usuario autenticado puede llamar aqui

        /*
        //En criterio viene esto. No nos sirve como filtro para la query
        {
            nombre     : 
            categoria  :
            fabricante :
            precioMin  :
            precioMax  :
        }
        */

        let filtro = {}
        if(criterio.fabricante){
            filtro.fabricante = criterio.fabricante
        }
        if(criterio.categoria){
            filtro.categoria = criterio.categoria
        }
        if(criterio.nombre){
            //nombre : { $regex: new RegExp(criterio.nombre), $options: "i" },
        }

        //Alumno impertinente nº2
        filtro.precio = {
            $gte : 0,
            $lte : Number.MAX_SAFE_INTEGER
        }


        console.log("============================")
        console.log(criterio)
        console.log(filtro)

        if(criterio.precioMin){
            filtro.precio.$gte = criterio.precioMin
        }
        if(criterio.precioMax){
            filtro.precio.$lte = criterio.precioMax
        }

        //Alumno impertinente nº1
        /*
        if(criterio.precioMin){
            filtro.precio = { $gte : precioMin }
        } 
        if(criterio.precioMax){
            if(filtro.precio){
                filtro.precio.$lte = prercioMax 
            } else {
                filtro.precio = { $lte : precioMax }
            }
        } 
        */

        //State of the art programming
        /*
        if(criterio.precioMin && !criterio.precioMax){
            filtro.precio = { $gte : criterio.precioMin }
        } else if(!criterio.precioMin && criterio.precioMax){
            filtro.precio = { $lte : criterio.precioMax }
        } else if(criterio.precioMin && criterio.precioMax){
            filtro.precio  = { 
                $gt : criterio.precioMin, 
                $lt : criterio.precioMax 
            }       
        }
        */ 

        console.log("============================")
        console.log(filtro)
        console.log("============================")
        console.log(filtro.precio)


        //Si no viene filtro devolveríamos un numero limitado de productos o
        //paginaríamos que es mas costoso pero mas guay del Paraguay
        Producto
            .find( filtro )
            .then( listadoProductos => {
                resolve(listadoProductos)
            })
            .catch( error => {
                console.log(error)
                reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
            })
    })
}

exports.buscarProducto = function(_id){

    return new Promise(function(resolve, reject){
        Producto
            .findById( _id )
            .then( producto => {
                if(!producto){
                    reject({ codigo:404, descripcion:"No existe un producto con ese id"})//MAL: 404
                    return
                }
                resolve(producto)
            })
            .catch( error => {
                console.log(error)
                reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
            })
    })

}

exports.insertarProducto = function(producto, autoridad){

    return new Promise(function(resolve, reject){

        //AUTORIZACIÓN
        if(autoridad.rol != "EMPLEADO"){
            reject({ 
                codigo : 403, 
                descripcion : "Solo los empleados pueden insertar productos"
            })
            return
        }
        
        //VALIDACION
        //->reject

        //Eliminamos cualquier valor que venga en el _id
        delete producto._id
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




