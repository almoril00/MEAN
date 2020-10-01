

const mongoDB = require("mongoDB")


//Funciones asícronas:
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

    console.log("Conexión establecida");

    //Al servidor de bases de datos le pedimos un esquema
    let seriesDB = dbs.db("seriesDB")


})

TO