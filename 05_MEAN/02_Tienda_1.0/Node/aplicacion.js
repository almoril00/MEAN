const express = require('express')
const bodyParser = require("body-parser")
const conexionBD = require('./util/conexionBD')
const usuarios = require("./servicios_rest/usuariosRest")

console.log("Arrancando...")

conexionBD.conectarBBDD(arrancarServidor)

function arrancarServidor(){

    let app = express()

    //Esperamos jotasones en los bodys
    app.use(bodyParser.json())

    //Esta función se llamará para TODAS las peticiones recibidas
    //Si se la asignamos a un router (router.use(funcion)) se aplicará solo a las peticiones 
    //relacionadas con él
    app.use(interceptorLog, 
            interceptorCors)
            //interceptor autenticacion

    //Le indicamos a express que utilice los router que hemos definido
    app.use(usuarios.router)

    //Arrancamos el servidor
    app.listen(8000, function(){
        console.log("Esperando peticiones en el puerto 8000")
    })

}

//                          //
// Interceptores de express //
//                          //

function interceptorLog(request, response, next){
    console.log("------------------------------------------------------------------")
    console.log("Peticion recibida: "+request.method+" "+request.url+". "+new Date())
    next()
}

function interceptorCors(request, response, next){
    console.log("Interceptor CORS")
    
    response.header("Access-Control-Allow-Origin", "*")
    response.header('Access-Control-Allow-Methods', 
                    'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    response.header("Access-Control-Allow-Headers", 
                    "Origin, X-Requested-With, Content-Type, Accept, Authorization")  
    next()
}
