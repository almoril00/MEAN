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

    //Le añadimos las funciones interceptoras ANTES QUE LAS RUTAS
    //app.use(interceptorEjemplo1)
    //app.use(interceptorEjemplo2)
    //app.use(interceptorEjemplo3)
    //Tambien podemos añadir todos los interceptores del tiron 
    //app.use(interceptorEjemplo1,
    //        interceptorEjemplo2,
    //        interceptorEjemplo3)

    //Esta función se llamará para TODAS las peticiones recibidas
    //Si se la asignamos a un router (router.use(funcion)) se aplicará solo a las peticiones 
    //relacionadas con él
    app.use(interceptorLog, 
            interceptorCors)

    //Le indicamos a express que utilice los router que hemos definido
    app.use(usuarios.router)


    //Arrancamos el servidor
    app.listen(7000, function(){
        console.log("Esperando peticiones en el puerto 7000")
    })

}

//                          //
// Interceptores de express //
//                          //

//Son funciones que reciben tres parámetros:
//-request
//-response
//-next (la cadena de interceptores)
//  Si se ivvoca next se ejecutará el siguiente interceptor 
//  Si no se invoca la petición se detiene ahi y es necesario
//  rematarla con un response.end o similar
//  Cuidado que un 'next()' no es un return
//
//  El código de un interceptor situado antes del 'next()' se ejecuta 'a la ida' de la peticion hacia la lógica
//  de control
//  El código que esté despues se ejecuta 'a la vuelta': Cuando ya hemos procesado la petición y la respuesta
//  parte hacia el cliente


function interceptorEjemplo1(request, response, next){
    console.log("Interceptando-1")
    next()
    console.log("Interceptando-2")
}

function interceptorEjemplo2(request, response, next){
    console.log("Interceptando-3")
    
    condicion = true
    if( condicion ){
        next()
    } else {
        response.end("NO SE PUDO PROCESAR POR LO QUE SEA")
    }
    
    console.log("Interceptando-4")
}

function interceptorEjemplo3(request, response, next){
    console.log("Interceptando-5")
    next()
    console.log("Interceptando-6")
}

//
// Usos normales de los interceptores:
// -log
// -autenticacion
// -añadir cabeceras a las respuestas
// -efecturar validaciones iniciales
//

function interceptorLog(request, response, next){
    console.log("------------------------------------------------------------------")
    console.log("Peticion recibida: "+request.method+" "+request.url+". "+new Date())
    next()
   //////////////////////////////////////////
   //ESTO MAL
    console.log("Status:"+response.statusCode)
    
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
