const mongoDB = require("mongodb")

exports.conexion = null
exports.esquema = null

exports.conectarBBDD = function(callback){

    let url = "mongodb://localhost:27017"
    //'db' es un objeto que representa al servidor MongoDB
    mongoDB.connect(url, { useUnifiedTopology: true }, function(error, dbs){
        if(error){
            console.log("No se pudo conectar con la base de datos :(")
            //console.log(error)
            return 
        }

        console.log("Conexión con la base de datos establecida.")
        exports.conexion = dbs
        exports.esquema = dbs.db("tienda")

        //Como hemos podido conectar ejecutamos la función que nos han pasado (callback)
        callback()
    })
}



