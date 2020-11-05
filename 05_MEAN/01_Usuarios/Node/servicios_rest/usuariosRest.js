const express = require("express")
const negocioUsuarios = require("../negocio/negocioUsuarios")

//Pedimos a express un objeto del tipo router
const router = express.Router()

router.get   ('/usuarios', listarUsuarios)
router.get   ('/usuarios/:id', buscarUsuario)
router.post  ('/usuarios', insertarUsuario)
router.put   ('/usuarios/:id', modificarUsuario)
router.delete('/usuarios/:id', borrarUsuario)

/*
router.options(prueba)

function prueba(request, response){
    console.log("OPTIONS!")
    response.end()
}


    //Incluye configuraciÃ³n para BASIC AUTHENTICATION
    response.header("Access-Control-Allow-Origin", "*")
    response.header('Access-Control-Allow-Methods', 
                    'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    response.header("Access-Control-Allow-Headers", 
                    "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    
*/

//Solo necesitamos exportar el router porque ya sabe a qué
//funciones hay que llamar
exports.router = router


//                                              //
//LÓGICA DE CONTROL PARA EL API REST DE USUARIOS//
//                                              //

function listarUsuarios(request, response){
    //obtener del request el criterio de busqueda
    //let x = request.query.x

    negocioUsuarios
        .listarUsuarios()
        .then( usuarios => response.json(usuarios) )
        .catch( error => response.status(error.codigo).json(error))

}

//GET /usuarfios/:id
function buscarUsuario(request, response){
    //obtener del request el valor del id
    let id = request.params.id

    negocioUsuarios
        .buscarUsuario(id)
        .then( usuario => response.json(usuario) )
        .catch( error => response.status(error.codigo).json(error) )

}

function insertarUsuario(request, response){
    //obtener del request el usuario, que está en el body
    let usuario = request.body

    negocioUsuarios
        .insertarUsuario(usuario)
        .then( id => response.json({ _id : id }) )
        .catch( error => response.status(error.codigo).json(error) )

}

//PUT /usuarios/:id
function modificarUsuario(request, response){
    //obtener del request el usuario, que está en el body y el id que está en la ruta

    let usuario = request.body
    let _id = request.params.id 
    //Machacamos cualquier valor que trajera el usuario en _id por el que hay 
    //en la ruta, que es el 'oficial'
    usuario._id = _id

    negocioUsuarios
        .modificarUsuario(usuario)
        .then( usuarioModificado => response.json(usuarioModificado) )
        .catch( error => response.status(error.codigo).json(error) )

}

//DELETE /usuarios/:id
function borrarUsuario(request, response){

    let _id = request.params.id //Aqui recogemos el _id como un string

    negocioUsuarios
        .borrarUsuario(_id)
        .then( () => response.json({ codigo:200, descripcion:"El usuario se ha borrado correctamente"}) )
        .catch( error => {
            //404, el usuario no existe
            //500, error en la base de datos
            response.status(error.codigo).json(error)
        })

} //106

/*
404 NOT FOUND
Content-Type: application/json
------------------------------
{
    "codigo" : 404,
    "descripcion" : "No existe un usuario con ese id"
}
*/



