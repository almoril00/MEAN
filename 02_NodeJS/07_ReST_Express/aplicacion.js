const express = require("express")
const bodyParser = require("body-parser")
const conexionBD = require("./conexionBD.js")
const negocioSeries = require("./negocioSeries.js")

conexionBD.conectarBBDD();

//Configuración general

let app = express()

app.listen(6001, function(){
    console.log("Esperando peticiones en el puerto 6001")
})

app.use(bodyParser.json())
app.use(express.static("./recursos"))

//Configuración específica para nuestro servicio rest

app.get("/series", listarSeries)
app.get("/series/:id", buscarSeriePorId)
app.post("/series", insertarSerie)
app.put("/series/:id", modificarSerie)
app.delete("/series/:id", borrarSerie)

//                                    //
// Funciones con la lógica de control //
//                                    //

function devolverError(status, descripcion, response){
    response.statusCode = status
    let error = {
        codigo : status,
        descripcion : descripcion
    }
    response.json(error)    
}

function listarSeries(request, response){
    negocioSeries
        .listarSeries(request.query)
        .then(function(arraySeries){
            response.json(arraySeries)
        })
        .catch(function(error){
            console.log(error)
            devolverError(500, "Fallo con la bb.dd, consulte con el administrador", response)
        })
}

//GET /series/:id
function buscarSeriePorId(request, response){

    let _id = request.params.id

    negocioSeries
        .buscarSeriePorId(_id)
        .then(function(serie){
            if(!serie){
                //404
                devolverError(404,"La serie no existe", response)  
                return
            }            
            //200
            response.json(serie)
        })
        .catch(function(error){
            //500
            devolverError(500,"Fallo interno en el servidor", response)
        })
}

function insertarSerie(request, response){

    let serie = request.body

    negocioSeries
        .insertarSerie(serie)
        .then(function(resultado){
            response.end("OK") //
        })
        .catch(function(error){
            //500
            devolverError(500,"Fallo interno en el servidor", response)
        })

}

function modificarSerie(request, response){

    let _id = request.params.id
    let serie = request.body

    //Sustituimos cualquier posible _id que venga en el body por el de la 
    //url, que es el oficial
    serie._id = _id

    negocioSeries
        .modificarSerie(serie)
        .then(function(resultado){
            response.end("Digamos que ya")
        })
        .catch(function(error){
            //500
            devolverError(500,"Fallo interno en el servidor", response)
        })    
}

//DELETE /series/123454qwerty
function borrarSerie(request, response){

    let _id = request.params.id

    negocioSeries
        .borrarSerie(_id)
        .then(function(resultado){
            if(resultado.deletedCount == 0){
                //404
                devolverError(404,"La serie no existe", response)            
                return
            }
            //200
            response.end("Borrado")
        })
        .catch(function(error){
            devolverError(500,"Fallo interno en el servidor", response)            
        })
}



