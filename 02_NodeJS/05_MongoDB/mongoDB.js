//npm install mongodb
const mongoDB = require("mongoDB")

/////////////////////
// MONGO DB CLIENT //
/////////////////////

//Funciones asíncronas:
//-connect
//
//Funciones síncronas
//-dbs.db(nombre_esquema) (obtiene un esquema)

//////////////////////////////////
//Obtener una conexión a MongoDB//
//////////////////////////////////

let url = "mongodb://localhost:27017"
//'db' es un objeto que representa al servidor MongoDB
mongoDB.connect(url, { useUnifiedTopology: true }, function(error, dbs){

    if(error){
        console.log(error)
        return
    }

    //Al servidor de bases de datos le pedimos un esquema
    //Esta función es síncrona
    let seriesDB = dbs.db("seriesDB")
    
    //Al esquema le pedimos una colección
    //Esta función es síncrona
    let series = seriesDB.collection("series")

    //////////
    //INSERT//
    //////////

    let serie = {
        //_id      : 1,
        titulo   : "El equipo A",
        genero   : "Tiros",
        year     : 1983,
        pais     : "USA",
        sinopsis : "Un grupo de combatientes de la guerra de Vietnam es acusado de un ccrimen que no han cometido"
    }

    series.insertOne(serie, function(error, resultado){
        if(error){
            console.log(error)
            return
        }

        console.log(resultado)
    })

    series.findOne( { genero : "Tiros" }, function(error, documentos){
        if(error){
            console.log(error)
            return
        }
        console.log(documentos)
    })

    



    //

})

