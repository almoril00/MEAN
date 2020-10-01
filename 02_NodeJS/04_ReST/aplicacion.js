

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


METODO  RUTA         PARAMS     Funcionalidad
GET     /series      -          Listar las series
GET     /series      genero     Listar las series por genero
GET     /series/:id  -          Buscar una serie por su id
-
-
DELETE  /series/:id  -          Eliminar una serie por su id

*/

function procesarPeticion(request, response){
    let metodo = request.method.toUpperCase()
    let url    = request.url

    if(metodo=="GET" && url=="/series"){
        listarSeries()
    } else if(metodo=="GET" && url=="/series/ALGO"){

    } else if(metodo=="DELETE" && url=="/series/ALGO"){

    }
}

function listarSeries(){
    //SELECT * FROM SERIES
    //convertirlas a un array de objetos en json
    //responder 



}

function buscarSeriePorId(){

}

function insertarSerie(){

}

function modificarSerie(){

}

function borrarSerie(){
    //DELETE FROM SERIES WHERE ID=ALGO
    //RESPONDER OK
}

