const mongoose = require("mongoose")

exports.conectarBBDD = function(callback){

    const url="mongodb://localhost:27017/Node_10" 

    mongoose
    .connect(url, { useNewUrlParser: true, 
                    useUnifiedTopology: true })
        .then( x => {
            console.log("Conectado a la BB.DD")
            //Esto es para que despues de un update devuelvan el objeto tal cual ha quedado
            //en la coleccion
            mongoose.set('returnOriginal', false)
            callback()
        })
        .catch( error => console.log(error))
        
}

