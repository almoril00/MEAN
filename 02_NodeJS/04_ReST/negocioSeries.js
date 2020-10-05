const conexionBD = require("./conexionBD.js")
const mongodb = require("mongodb")

//El objeto exports es implícito
//Le asignaremos como propiedades todo lo que queramos que sea visible desde otros 
//ficheros

//Allá dónde hagan falta estas funciones haremos:
//const negocioSeries = require("ruta a negocioSeries.js")

exports.listarSeries = function(criterioBusqueda){
    
    //comprobar 
    let coleccionSeries = conexionBD.esquema.collection("series")
    let cursor = coleccionSeries.find( criterioBusqueda )
    //Devolvemos la promesa para que sea el que ha llamado a 'listarSeries' 
    //el que decida que hay que hacer a continuacion
    return cursor.toArray()    
}



exports.buscarSeriePorId = function(_id){

    //El _id que nos llega es una cadena de texto
    //En los documentos de la colección el valor de _id es del tipo ObjectID
    //Hay que crear un ObjectId con el valor que nos llega
    let objectId = new mongodb.ObjectId(_id)
    return conexionBD.esquema.collection("series").findOne( { "_id" : objectId } )

}

//La lógica de negocio trabaja con OBJETOS
exports.insertarSerie = function(serie){

    //validaciones
    //autorización (seguridad)
    //...
    return conexionBD.esquema.collection("series").insertOne(serie)

}

exports.modificarSerie = function(){    
}

exports.borrarSerie = function(_id){  
    
    let objectId = new mongodb.ObjectId(_id)
    return conexionBD.esquema.collection("series").deleteOne( { "_id" : objectId })

}





