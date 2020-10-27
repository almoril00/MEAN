const express = require('express')
const bodyParser = require("body-parser")
const conexionBD = require('./util/conexionBD')
const usuarios = require("./servicios_rest/usuariosRest")

console.log("Arrancando...")

//Le pasamos la funcion 'arrancarServidor' a 'conectarBBDD'
//Solo se invocará si se puede conectar
conexionBD.conectarBBDD(arrancarServidor)


function arrancarServidor(){

    let app = express()

    //Si la petición tiene content-type application json este body parser 
    //se encargara de leerlo y dejarlo convertido ya en objeto en la propiedad
    //'body' del objeto 'request'
    app.use(bodyParser.json())

    //Le indicamos a express que utilice los router que hemos definido
    app.use(usuarios.router)

    //Arrancamos el servidor
    app.listen(7000, function(){
        console.log("Esperando peticiones en el puerto 7000")
    })

}



