const mongoDB = require("mongodb")
const conexionBD  = require("../util/conexionBD")

exports.insertarUsuario = function(usuario){
    //
    //Validar
    //
    //Campos obligatorios
    //NO TIENE QUE VENIR VALOR EN EL _ID
    //login   not null y que no exista ya
    //pw      not null y que cumpla el criterio de robustez
    //nombre  not null 
    //correoE que sea un correo
    //Si viene cualquier otra propiedad no es válido
    //
    //Calcular el hash del password
    //

    //Con callbacks:
    //El que invoca la función 'insertarUsuario(usuario) jamás sabrá
    //si se insertó o no
    /*
    conexionBD
        .esquema
        .collection("usuarios")
        .findOne(
            { login : usuario.login }, 
            function(error, data){
                if(error){
                    console.log(error)
                    return
                }

                if(data){
                    console.log("Ya existe un usario con ese login")
                    return
                }

                console.log("Insertando...")
                conexionBD
                    .esquema
                    .collection("usuarios")
                    .insertOne(
                        usuario, 
                        function(error, resultado){
                            if(error){
                                console.log(error)
                                return
                            }                            

                            console.log("Usuario insertado")

                            return true
                        })
            })
    */

    //Con las promesas que devuelve la librería de MongoDB:
    //Igual que con callbacks, aunque más bonito
    /*   
    conexionBD
        .esquema
        .collection("usuarios")
        .findOne( { login : usuario.login } )
        .then( function(data){
            if(data){
                console.log("Ya hay un usuario con ese login")
                return
            }            
            return conexionBD
                .esquema
                .collection("usuarios")
                .insertOne(usuario)
        })
        .then(function(resultado){
            console.log("Usuario insertado")
        })
        .catch( function(error){
            console.log(error)
        })
    */

    //No podemos devolver la promesa del find porque eso impla que es la 
    //logica de control la que ejecuta el insert y eso nos convierte
    //en unos desaprensivo
    //return conexionBD
    //    .esquema
    //    .collection("usuarios")
    //    .findOne( { login : usuario.login } )

    //
    //SOLUCIÓN:
    //
    //Crear y devolver nuestra propia promesa

    //Creamos una promesa utilizando el prototipo 'Promise'
    //Recibe un parámetro del tipo funcion que a su vez recibe dos funciones (ay mamá)
    //-función resolve
    //-funcion reject
    //
    //let promesa = new Promise(function(resolve, reject){
    //    //Aqui colocamos el código que ha de ejecutarse asíncronamente...
    //})

    return new Promise(
        function(resolve, reject){
            let coleccionUsuarios = conexionBD.esquema.collection("usuarios")            
            coleccionUsuarios
                .findOne( { login : usuario.login } )
                .then( function(data){
                    if(data){
                        //MAL: 400, Ya hay un usuario con ese login
                        reject({ codigo:400, descripcion:"Ya existe un usuario con ese login"})
                        return
                    }

                    return coleccionUsuarios.insertOne( usuario )
                })
                .then(function(resultado){
                    //BIEN: Se ha insertado
                    resolve(resultado.insertedId)
                })
                .catch(function(error){
                    //MAL : 500
                    reject({ codigo:500, descripcion:"Ay mamá, que nos hemos matao"})
                })
        })
}

exports.borrarUsuario = function(_id){

    return new Promise( 
        function(resolve, reject){
            let coleccionUsuarios = conexionBD.esquema.collection("usuarios")

            //Debemos convertir el string recibido en un ObjectID
            _id = new mongoDB .ObjectId(_id)

            coleccionUsuarios
                .deleteOne( { _id : _id }) 
                .then(function(resultado){
                    if(resultado.deletedCount == 0){
                        //MAL : 404
                        reject({ codigo : 404, descripcion: "El usuario no existe "})
                        return 
                    }
                    //BIEN!
                    resolve() //Aqui no tenenemos nada que pasar!
                })
                .catch(function(error){
                    //MAL : 500
                    reject({ codigo: 500, descripcion: "Error en la base de datos"})
                })
        })
}


exports.modificarUsuario = function(usuario){

    return new Promise(function(resolve, reject){

        //VALIDAR!
            //si va mal -> REJECT("400") y RETURN

        let coleccionUsuarios = conexionBD.esquema.collection("usuarios")  
        
        //Creamos un ObjectId a partir del string que hemos recibido
        let _id = new mongoDB.ObjectId(usuario._id)

        console.log(_id)

        coleccionUsuarios
            .findOneAndUpdate(
                { "_id" : _id },             
                {
                    $set : {
                        login    : usuario.login,
                        pw       : usuario.pw,
                        rol      : usuario.rol,
                        correoE  : usuario.correoE
                    }
                })
            .then(function(resultado){

                console.log(resultado)

                if(!resultado.value){
                    //MAL: 404
                    reject({ codigo : 404, descripcion: "El usuario no existe"})
                    return
                }

                //BIEN!
                resolve(resultado.value) //
            })
            .catch(function(error){
                //MAL: 500
                reject({ codigo: 500, descripcion: "Error en la base de datos"})
            })
    })
}
