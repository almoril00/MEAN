//El objeto exports es implícito
//Le asignaremos como propiedades todo lo que queramos que sea visible desde otros 
//ficheros

//Allá dónde hagan falta estas funciones haremos:
//const negocioSeries = require("ruta a negocioSeries.js")

exports.listarSeries = function(){

    return [{
        "titulo" : "El mandaloriano"
    }]

}

exports.buscarSeriePorId = function(){
}

exports.insertarSerie = function(){
}

exports.modificarSerie = function(){    
}

exports.borrarSerie = function(){    
}





