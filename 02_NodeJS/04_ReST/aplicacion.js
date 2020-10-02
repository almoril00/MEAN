const http = require("http")
const negocioSeries = require("./negocioSeries.js")

http.createServer( procesarPeticion )
    .listen(4000, function(){ 
        console.log("Esperando peticiones en el puerto 4000.") 
    })

/*
/series

{
    _id : 
    titulo   :
    genero   :
    year     :
    pais     :
    sinopsis :
}

API ReST

METODO  RUTA         PARAMS     Funcionalidad
GET     /series      -          Listar las series
GET     /series      genero     Listar las series por genero
GET     /series/:id  -          Buscar una serie por su id
-                               Insertar una serie
-                               Modificar
DELETE  /series/:id  -          Eliminar una serie por su id
*/

function procesarPeticion(request, response){
    
    console.log(request.query) //undefined
    extraerQueryParams(request)
    console.log(request.query) //
    
    let metodo = request.method.toUpperCase()
    let url    = request.url.split("?")[0]

    //Averiguamos a qué funcíon de la lógica de control hay que llamar
    if(metodo=="GET" && url=="/series"){
        listarSeries(request, response)
    } else if(metodo=="GET" && url.match("/series/[0-9]+$") ){
        buscarSeriePorId(request, response)
    } else if(metodo=="DELETE" && url.match("/series/[0-9]+$") ){
        borrarSerie(request, response)
    } else {
        devolverError(404, "No sabemos que nos pides", response)
    }
}

function extraerQueryParams(request){

    let cachos = request.url.split("?")
    if(cachos.length < 2){
        request.query = []
        return
    }

    let parametros = cachos[1].split("&")

    let query = []

    for(let parametro of parametros){

        let smith = parametro.split("=")
        let clave = smith[0]
        let valor = smith[1]

        query[clave] = valor
    }

    request.query = query //Y YA
}

function devolverError(status, descripcion, response){
    response.statusCode = status
    response.setHeader('Content-Type','application/json')
    let error = {
        codigo : status,
        descripcion : descripcion
    }
    response.end(JSON.stringify(error))    
}


//                                                               //
//Tareas a realizar por la lógica de control en un servicio ReST//
//                                                               //

//-Averiguar qué nos están pidiendo (esto ya lo hemos hecho arriba con los preciosos IF anidados)
//
//-Extraer de la petición los valores necesarios para procesarla
// Estos valores podràn venir como:
// -parametros en la query (?)
// -parámetros en el body 
// -parámetros en la url
// -parámetros en el HEAD
// -un JSON en el body (o cualquier otro formato)
// -cualquier combinación de lo anterior
//
//-Invocar la función con la lógica de negocio
//
//-Si la lógica de negocio ha devuelto algo que le interesde al cliente configurar
// la respuesta para entregarlo
//
//-FIN

function listarSeries(request, response){
    console.log("ListarSeries");

    console.log(request.query.genero)
    console.log(request.query.creador)
    console.log(request.query.year)

    let serie = negocioSeries.listarSeries()

    response.setHeader('Content-type','application/json')
    response.end(JSON.stringify(serie))

}

function buscarSeriePorId(request, response){
    console.log("BuscarSeriePorId");
    response.end()
}

function insertarSerie(request, response){
    response.end()
}

function modificarSerie(request, response){
    response.end()
}

function borrarSerie(request, response){
    console.log("Borrar serie")
    response.end()
}

