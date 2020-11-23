const Usuario = require("../entidades/usuario").Usuario
const validar = require("../util/validacionUtil").validar

//Reglas de validación para los objetos usuario
/*
let reglasInsercion = {
    nombre  : 'required|min:3|max:40',
    login   : 'required|min:5|max:15',
    pw      : 'required|min:5|max:15',
    correoE : 'required|email',
}

let reglasModificacion = {
    nombre    : 'required|min:3|max:40',
    direccion : 'required|min:10|max:200',
    telefono  : 'required|min:9|max:40',
    login     : 'required|min:5|max:15',
    correoE   : 'required|email',
}
*/

let reglas = {
    nombre    : 'required|min:3|max:40',
    login     : 'required|min:5|max:15',
    pw        : 'min:5|max:15',
    correoE   : 'required|email',
    direccion : 'min:10|max:200',
    telefono  : 'min:9|max:40',
}

//EL usuario que recibimos ha salido del body de la peticion HTTP
exports.insertarUsuario = function(usuario){

    return new Promise(
        function(resolve, reject){

            //VALIDAR            
            let errores = validar(usuario, reglas)
            if(errores){
                reject({ codigo:400, descripcion:errores})
                return
            }

            //Por defecto los nuevos usuario son CLIENTES
            usuario.rol = "CLIENTE"

            //Comprobamos que no exista ya un usuario con el mismo login
            //Insertamos el nuevo usuario
            Usuario
                .findOne({ login : usuario.login })
                .then( usuarioEncontrado => {
                    if(usuarioEncontrado){
                        //MAL: 400, Ya hay un usuario con ese login
                        reject({ codigo:400, descripcion:"Ya existe un usuario con ese login"})
                        return 
                    }
                    //Insertar, pero el usuario que hemos recibido no tiene save!
                    let usuarioMG = new Usuario(usuario)
                    return usuarioMG.save()
                })
                .then( resultado => {
                    console.log(resultado)
                    resolve(resultado._id) 
                })
                .catch( error => {
                    console.log(error)
                    reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
                }) 
        })
}

exports.borrarUsuario = function(_id, autoridad){
    return new Promise( 
        (resolve, reject) => {

            //Autorizacion:
            //Empleados: pueden hacer y deshacer a su antojo con los usuarios
            //Clientes: Un cliente solo puede modificarse a si mismo
            if(autoridad.rol == "CLIENTE" && autoridad._id!=_id){
                reject({ 
                    codigo : 403, 
                    descripcion : "Los usuarios de tipo cliente solo pueden borrarse a si mismos"
                })
                return
            } 

            Usuario
                .findByIdAndRemove( _id )
                .then( usuarioBorrado => {
                    console.log(usuarioBorrado)
                    if(!usuarioBorrado){
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

exports.modificarUsuario = function(usuario,  //Usuario a modificar
                                    autoridad){ //Usuario que ordena la modificacion. _ID, ROL, login

    return new Promise(
        function(resolve, reject){

            //Autorizacion:
            //Empleados: pueden hacer y deshacer a su antojo con los usuarios
            //Clientes: Un cliente solo puede modificarse a si mismo
            if(autoridad.rol == "CLIENTE" && autoridad._id!=usuario._id){
                reject({ 
                    codigo : 403, 
                    descripcion : "Los usuarios de tipo cliente solo pueden modificarse a si mismos"
                })
                return
            }
            
            //VALIDAR            
            let errores = validar(usuario, reglas)
            if(errores){
                reject({ codigo:400, descripcion:errores})
                return
            }


            //El usuario recibido puede contener propiedades que no deben cambiar:
            //-pw
            //-rol
            //-login
            delete usuario.pw
            delete usuario.rol
            delete usuario.login

            //mongoose.set('returnOriginal', false);
            Usuario
                .findByIdAndUpdate( usuario._id, usuario, { new : true } )
                .then( usuarioModificado => {
                    if(!usuarioModificado){
                        reject({ codigo: 404, descripcion: "El usuario no existe"}) 
                        return
                    }
                    resolve(usuarioModificado)
                })
                .catch( error => {
                    console.log(error)
                    reject({ codigo: 500, descripcion: "Error en la base de datos"})                       
                })
        })
}

exports.listarUsuarios = function(autoridad){
    return new Promise(
        function(resolve, reject){

            if(autoridad.rol != "EMPLEADO"){
                reject({ 
                    codigo : 403, 
                    descripcion : "Solo los empleados pueden listar"
                })
                return
            }
            
            Usuario
                .find()
                .then( usuarios => resolve(usuarios) )
                .catch( error => {
                    console.log(error)
                    reject({ codigo: 500, descripcion: "Error en la base de datos"})
                })
        })
}

exports.buscarUsuario = function(_id, autoridad){
    return new Promise(
        function(resolve, reject){
        
            if(autoridad.rol != "EMPLEADO"){
                reject({ 
                    codigo : 403, 
                    descripcion : "Solo los empleados pueden buscar por id"
                })
                return
            }

            Usuario
                .findById( _id )
                .then( usuario => {
                    if(!usuario){
                        //MAL: 404
                        reject({ codigo: 404, descripcion: "No existe un usuario con ese id"})
                        return
                    }
                    //BIEN!
                    resolve(usuario)
                })
                .catch( error => reject({ codigo: 500, descripcion: "Error en la base de datos"}) ) //MAL: 500
        })
}

exports.buscarPorCredenciales = function(login, pw){
    return new Promise(function(resolve, reject){
        
        Usuario
            .findOne( { login:login, pw:pw })
            .then( usuario => {
                if(!usuario){
                    reject({ codigo: 404, descripcion: "No hay un usuario con esas credenciales"})
                    return
                }
                //Le quitamos el password al usuario por seguridad
                usuario.pw = null
                resolve(usuario)                
            })
            .catch( error => {
                console.log(error)
                reject({ codigo: 500, descripcion: "Error en la base de datos"})                
            })
    })
}

