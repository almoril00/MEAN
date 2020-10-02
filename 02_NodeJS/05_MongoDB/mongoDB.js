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
        _id      : 1,
        titulo   : "V",
        genero   : "Ciencia ficción",
        year     : 1983,
        pais     : "USA",
        sinopsis : "Unos amables lagartos vienen a la tierra a merendar"
    }

    series.insertOne(serie, function(error, resultado){
        if(error){
            console.log(error)
            return
        }

        console.log(resultado)
    })

    //

})

