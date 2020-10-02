let mongoDB = require("mongodb")


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

let url = "mongodb://localhost:27017"
//'db' es un objeto que representa al servidor MongoDB

//Cuando no proporcionamos un callback nos devuelven una PROMESA
//A las promesas hemos de proporcionarles los callbacks (pero estos son mucho más bonitos
//y nos permiten evitar el callback hell)
//
//promesa.then(funcion que se ejecutará cuando todo vaya bien)
//promesa.catch(funcion que se ejecutará si algo va mal)

let series = null
let promesa = mongoDB.connect(url, { useUnifiedTopology: true })
promesa
    .then(function(dbs){
        console.log("======================================")
        console.log("Conexión establecida")

        let seriesDB = dbs.db("seriesDB")
        series = seriesDB.collection("series")

        let serie = {
            //_id      : 1,
            titulo   : "Falcon crest",
            genero   : "Culebrón",
            year     : 1981,
            pais     : "USA",
            sinopsis : "Angela Channing y su mayordomo chino cruzan el golden gate en limusina para ir al viñedo"
        }  
        
        //Si la última línea de un then devuelve una promesa...
        return series.insertOne(serie)
    })
    //...el siguiente 'then' es de esa promesa
    .then(function(resultadoInsert){
        console.log("======================================")        
        console.log(resultadoInsert)
        
        return series.findOne({ genero : 'Culebrón'})
    })
    .then(function(documentoEncontrado){
        console.log("======================================") 
        console.log(documentoEncontrado)       

    })
    .catch(function(error){
        console.log(error);
    })
