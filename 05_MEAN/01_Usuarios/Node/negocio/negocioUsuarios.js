//npm install validatorjs
let Validator = require('validatorjs');
Validator.useLang("es")

const mongoDB = require("mongodb")
const conexionBD  = require("../util/conexionBD")

//Reglas de validación para los objetos usuario
let reglas = {
    login   : 'required|min:5|max:15',
    pw      : 'required|min:5|max:15',
    correoE : 'required|email',
    rol     : ['required', 'regex:/(CLIENTE|EMPLEADO|ADMIN)/'],
}
//Propiedades admitidas en los objetos usuario
let propiedadesUsuario = [ '_id', 'login', 'pw', 'rol', 'correoE']

//Función guarrindonga para comprobar que un objeto tiene unicamente propiedades permitidas
//y los valores adecuados
//
//DEBERÍAMOS COLOCARLA EN UN FICHERO APARTE
//
function validar(objeto, propiedades, reglas){
    
    //Comprobamos que el objeto tenga solo propiedades admitidas
    for(let propiedad in objeto){
        let encontrado = false
        for(let propiedadAdmitida of propiedades){
            if(propiedadAdmitida == propiedad){
                encontrado = true
                break
            }
        }
        if(!encontrado){
            return { propiedadInvalida : propiedad }
        }
    }

    let validador = new Validator(objeto, reglas)
    if(validador.fails()){
        return validador.errors.errors
    }

}

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

            //VALIDAR            
            let errores = validar(usuario, propiedadesUsuario, reglas)
            if(errores){
                reject({ codigo:400, descripcion:errores})
                return
            }

            let coleccionUsuarios = conexionBD.esquema.collection("usuarios")            
            coleccionUsuarios
                .findOne( { login : usuario.login } )
                .then( data => {
                    if(data){
                        //MAL: 400, Ya hay un usuario con ese login
                        reject({ codigo:400, descripcion:"Ya existe un usuario con ese login"})
                        return
                    }

                    return coleccionUsuarios.insertOne( usuario )
                })
                .then( resultado => resolve(resultado.insertedId) )//BIEN: Se ha insertado
                .catch( error => reject({ codigo:500, descripcion:"Ay mamá, que nos hemos matao"}) ) //MAL: 500
        })
}

exports.borrarUsuario = function(_id){

    return new Promise( 
        (resolve, reject) => {
            let coleccionUsuarios = conexionBD.esquema.collection("usuarios")

            //Debemos convertir el string recibido en un ObjectID
            _id = new mongoDB .ObjectId(_id)

            coleccionUsuarios
                .deleteOne( { _id : _id }) 
                .then( resultado => {
                    //Con el operador ternario:
                    //(resultado.deletedCount==0) ? reject({ codigo : 404, descripcion: "El usuario no existe "}) : resolve()

                    if(resultado.deletedCount == 0){
                        //MAL : 404
                        reject({ codigo : 404, descripcion: "El usuario no existe "})
                        return 
                    }
                    //BIEN!
                    resolve() //Aqui no tenenemos nada que pasar!
                })
                .catch( error => reject({ codigo: 500, descripcion: "Error en la base de datos"}) ) //MAL : 500
        })
}

exports.modificarUsuario = function(usuario){

    return new Promise(
        function(resolve, reject){

            //VALIDAR            
            let errores = validar(usuario, propiedadesUsuario, reglas)
            if(errores){
                reject({ codigo:400, descripcion:errores})
                return
            }

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
                .then( resultado => {
                    if(!resultado.value){
                        //MAL: 404
                        reject({ codigo : 404, descripcion: "El usuario no existe"})
                        return
                    }
                    //BIEN!
                    resolve(resultado.value) //
                })
                .catch( error =>  reject({ codigo: 500, descripcion: "Error en la base de datos"}) ) //MAL: 500
        })
}

exports.listarUsuarios = function(){

    return new Promise(
        function(resolve, reject){
            let coleccionUsuarios = conexionBD.esquema.collection("usuarios")
            //Find es síncrono y devuelve un cursor
            let cursor = coleccionUsuarios.find()
            //Trabajar con el cursos ya es asíncrono
            cursor
                .toArray()
                .then( documentos => resolve(documentos) )//BIEN
                .catch( error => reject({ codigo: 500, descripcion: "Error en la base de datos"}) ) //MAL: 500
        })
}

exports.buscarUsuario = function(_id){

    return new Promise(
        function(resolve, reject){
        
            let coleccionUsuarios = conexionBD.esquema.collection("usuarios")

            _id = new mongoDB.ObjectId(_id)

            coleccionUsuarios
                .findOne( { _id : _id } )
                .then( documento => {

                    //Con el operador ternario:
                    //(!documento) ? reject( { codigo: 404, descripcion: "No existe un usuario con ese id" }) : resolve(documento)

                    if(!documento){
                        //MAL: 404
                        reject({ codigo: 404, descripcion: "No existe un usuario con ese id"})
                        return
                    }
                    //BIEN!
                    resolve(documento)
                })
                .catch( error => reject({ codigo: 500, descripcion: "Error en la base de datos"}) ) //MAL: 500
        })
}




