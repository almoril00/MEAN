const conexionBD = require("./conexionBD.js")

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

exports.buscarSeriePorId = function(){
}

exports.insertarSerie = function(){
}

exports.modificarSerie = function(){    
}

exports.borrarSerie = function(){    
}





