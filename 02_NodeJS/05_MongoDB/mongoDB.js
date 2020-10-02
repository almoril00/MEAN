//npm install mongodb
const mongoDB = require("mongoDB")

/////////////////////
// MONGO DB CLIENT //
/////////////////////

//Funciones asíncronas:
//-connect
//-insert
//-findOne
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

    console.log("=====================================")
    console.log("Conexión establecida")

    //Al servidor de bases de datos le pedimos un esquema
    //Esta función es síncrona
    let seriesDB = dbs.db("seriesDB")
    
    //Al esquema le pedimos una colección
    //Esta función es síncrona
    let series = seriesDB.collection("series")
    
    let serie = {
        //_id      : 1,
        titulo   : "Alf",
        genero   : "Comedia",
        year     : 1986,
        pais     : "USA",
        sinopsis : "Un señor con posibilidades económicas infinitas acoge a un desastre de marciano en su casa"
    }

    ////////////
    // INSERT //
    ////////////
    series.insertOne(serie, function(error, resultado){
        if(error){
            console.log(error)
            return
        }

        console.log("=====================================")        
        console.log(resultado)

        //////////////
        // FIND ONE //
        //////////////
        series.findOne( { genero : "Comedia" }, function(error, documentos){
            if(error){
                console.log(error)
                return
            }
            console.log("=====================================")
            console.log(documentos)

            ////////////////////////
            // CERRAR LA CONEXIÓN //
            ////////////////////////
            dbs.close(function(){
                console.log("=====================================")
                console.log("Conexión cerrada")
            })
        })
    })
})



