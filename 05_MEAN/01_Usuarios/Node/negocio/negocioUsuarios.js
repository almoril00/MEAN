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
                .findOne( { login : usuario.login })
                .then( function(data){
                    if(data){
                        //MAL, login duplicado
                        reject("ERROR: LOGIN DUPLICADO")
                        return
                    }
                    return coleccionUsuarios.insertOne(usuario)
                })
                .then( function(resultado){
                    //BIEN, se insertó y entregamos el id
                    resolve(resultado.insertedId)
                })
                .catch( function(error){
                    //MAL, zambombazo en la bb.dd
                    reject("FALLO EN EL SERVIDOR")
                })

        })
}



