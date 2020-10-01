

const http = require("http")

http.createServer( procesarPeticion )
    .listen(4000, function(){ 
        console.log("Esperando peticiones en el puerto 4000.") 
    })

/*
/series

{
    _id : 
    titulo :
    genero :
    year   :
    pais   :
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
    let metodo = request.method.toUpperCase()
    let url    = request.url

    if(metodo=="GET" && url=="/series"){
        listarSeries()
    } else if(metodo=="GET" && url.match("/series/[0-9]+$") ){
        buscarSeriePorId()
    } else if(metodo=="DELETE" && url.match("/series/[0-9]+$") ){
        borrarSerie()
    }
}

//                                                               //
//Tareas a realizar por la lógica de congtrol en un servicio ReST//
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
    response.end()
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

