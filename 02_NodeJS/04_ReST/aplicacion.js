const http = require("http");
const conexionBD = require("./conexionBD.js")
const negocioSeries = require("./negocioSeries.js")

conexionBD.conectarBBDD();

http.createServer( procesarPeticion )
    .listen(4000, function(){ 
        console.log("Esperando peticiones en el puerto 4000.") 
    })

/*
Serie:
{
    _id : 
    titulo   :
    genero   :
    year     :
    pais     :
    sinopsis :
}

API ReST

METODO  RUTA         PARAMS     Body    Funcionalidad
GET     /series      -          -       Listar las series
GET     /series      genero     -       Listar las series por genero
GET     /series/:id  -          -       Buscar una serie por su id
POST    /series      -          JSON    Insertar una serie
-       -            -          -       Modificar
DELETE  /series/:id  -          -       Eliminar una serie por su id
*/

function procesarPeticion(request, response){
    
    //console.log(request.query) //undefined
    extraerQueryParams(request)
    //console.log(request.query) //
    
    let metodo = request.method.toUpperCase()
    let url    = request.url.split("?")[0]

    //Averiguamos a qué funcíon de la lógica de control hay que llamar
    if(metodo=="GET" && url=="/series"){
        listarSeries(request, response)
    } else if(metodo=="GET" && url.match("/series/[0-9a-zA-Z]+$") ){
        buscarSeriePorId(request, response)
    } else if(metodo=="POST" && url=="/series"){
        insertarSerie(request, response)   
    }else if(metodo=="DELETE" && url.match("/series/[0-9a-zA-Z]+$") ){
        borrarSerie(request, response)
    } else {
        devolverError(404, "No sabemos que nos pides", response)
    }
}

function extraerQueryParams(request){

    let cachos = request.url.split("?")
    if(cachos.length < 2){
        request.query = {}
        return
    }

    let parametros = cachos[1].split("&")

    let query = {}
    for(let parametro of parametros){
        let smith = parametro.split("=")
        let clave = smith[0]
        //Esto no: losmparámetros vienen 'URLEncoded'
        //let valor = smith[1]
        //Decodificamos el valor del parámetro por si tenía algún caracter especial
        let valor = decodeURIComponent(smith[1])

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

    //console.log(request.query.genero)
    //console.log(request.query.titulo)
    //console.log(request.query.year)

    //Esta función devuelve una promesa
    negocioSeries
        .listarSeries(request.query)
        .then(function(arraySeries){
            response.setHeader('Content-type','application/json')
            response.end(JSON.stringify(arraySeries))
        })
        .catch(function(error){
            console.log(error)
            devolverError(500, "Fallo con la bb.dd, consulte con el administrador", response)
        })

}

//GET /series/14A76b
function buscarSeriePorId(request, response){

    let _id = request.url.split("/").pop()

    negocioSeries
        .buscarSeriePorId(_id)
        .then(function(serie){
            if(!serie){
                //404
                devolverError(404,"La serie no existe", response)  
                return
            }            
            //200
            response.setHeader('Content-type','application/json')
            response.end(JSON.stringify(serie))
        })
        .catch(function(error){
            //500
            devolverError(500,"Fallo interno en el servidor", response)
        })
}

function insertarSerie(request, response){

    //Cuando la petición sale del Event Queue solo incluye el HEAD
    //Leer el BODY es cosa nuestra
    //En el módulo http va con eventos

    //request.on(evento, callback)
    request.on("data", function(body){
        console.log(body.toString())

        negocioSeries.insertarSerie(JSON.parse(body))
        .then(function(resultado){
            response.end("OK")
        })
        .catch(function(error){
            response.end("MAL")
        })
    })
}

function modificarSerie(request, response){
    response.end()
}

//DELETE /series/123454qwerty
function borrarSerie(request, response){
    console.log("Borrar serie")

    let _id = request.url.split("/").pop()

    negocioSeries
        .borrarSerie(_id)
        .then(function(resultado){
            if(resultado.deletedCount == 0){
                //404
                devolverError(404,"Fallo interno en el servidor", response)            
                return
            }
            //200
            response.end("Borrado")
        })
        .catch(function(error){
            devolverError(500,"Fallo interno en el servidor", response)            
        })


}





