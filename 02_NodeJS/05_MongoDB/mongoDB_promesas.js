let mongoDB = require("mongodb")


/////////////////////
// MONGO DB CLIENT //
/////////////////////

//Funciones asíncronas:
//-connect
//-insert
//-findOne
//-cursor.toArray Recorre el cursor completamente y guarda los elementos en un array
//
//Funciones síncronas
//-dbs.db(nombre_esquema) (obtiene un esquema)
//-find (devuelve un cursor)

let url = "mongodb://localhost:27017"
//'db' es un objeto que representa al servidor MongoDB

//Cuando no proporcionamos un callback nos devuelven una PROMESA
//A las promesas hemos de proporcionarles los callbacks (pero estos son mucho más bonitos
//y nos permiten evitar el callback hell)
//
//promesa.then(funcion que se ejecutará cuando todo vaya bien)
//promesa.catch(funcion que se ejecutará si algo va mal)

let dbs = null
let series = null

//let promesa = mongoDB.connect(url, { useUnifiedTopology: true })
//promesa
//    .then(...)
//    .catch(...)

mongoDB.connect(url, { useUnifiedTopology: true })
    .then(function(_dbs){
        dbs = _dbs
        console.log("======================================")
        console.log("Conexión establecida")

        let seriesDB = dbs.db("seriesDB")
        series = seriesDB.collection("series")

        let serie = {
            //_id      : 1,
            titulo   : "Norte y sur",
            genero   : "Culebrón",
            year     : 1985,
            pais     : "USA",
            sinopsis : "La guerra civil americana desde una perspectiva amorosa"
        }  
        
        //Si la última línea de un then devuelve una promesa...
        return series.insertOne(serie)
    })
    //...el siguiente 'then' es de esa promesa
    .then(function(resultadoInsert){
        console.log("======================================")        
        console.log(resultadoInsert)
        
        return series.findOne({ titulo : 'Norte y sur'})
    })
    .then(function(documentoEncontrado){
        console.log("======================================") 
        console.log(documentoEncontrado) 
        
        //Al hacer un find nos devuelven un cursor
        //Esto es sincrono
        let cursor = series.find()
        
        //Con la función 'toArray' leemos 'del tirón' todo el cursor
        //Hay que usarla con precaución
        //La función 'toArray' es ASINCRONA
        return cursor.toArray()
    })
    .then(function(listadoSeries){
        console.log("======================================") 
        for(let s of listadoSeries){
            console.log(s.titulo+", "+s.year)
        }

        return dbs.close()     
    })
    .then(function(){
        console.log("======================================") 
        console.log("Conexión cerrada")
    })
    .catch(function(error){
        console.log(error);
    })

