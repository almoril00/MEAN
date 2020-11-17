const mongoose = require("mongoose")

exports.conectarBBDD = function(callback){

    const url="mongodb://localhost:27017/tienda" 
    mongoose
        .connect(url, { useNewUrlParser: true, 
                        useUnifiedTopology: true })
        .then( x => {
            console.log("Conectado a la BB.DD")
            callback()
        })
        .catch( error => console.log(error))

}

