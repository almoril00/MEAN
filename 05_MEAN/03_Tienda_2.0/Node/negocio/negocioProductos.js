const Producto = require("../entidades/producto").Producto

exports.listarProductos = function(criterio){
    return new Promise(function(resolve, reject){
        Producto
            .find( /*criterio*/ )
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




