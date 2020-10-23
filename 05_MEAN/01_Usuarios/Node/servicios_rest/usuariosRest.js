const express = require("express")
const negocioUsuarios = require("../negocio/negocioUsuarios")

//Pedimos a express un objeto del tipo router
const router = express.Router()

router.get   ('/usuarios', listarUsuarios)
router.get   ('/usuarios/:id', buscarUsuario)
router.post  ('/usuarios', insertarUsuario)
router.put   ('/usuarios/:id', modificarUsuario)
router.delete('/usuarios/:id', borrarUsuario)

//Solo necesitamos exportar el router porque ya sabe a qué
//funciones hay que llamar
exports.router = router

//                                              //
//LÓGICA DE CONTROL PARA EL API REST DE USUARIOS//
//                                              //

function listarUsuarios(request, response){

    //obtener del request el criterio de busqueda
    //let x = request.query.x

}

function buscarUsuario(request, response){

    //obtener del request el valor del id
    let id = request.params.id

}

function insertarUsuario(request, response){
    //obtener del request el usuario, que está en el body
    let usuario = request.body
    negocioUsuarios.insertarUsuario(usuario)
    response.end()
}

function modificarUsuario(request, response){
    //obtener del request el usuario, que está en el body y el id que está en la ruta
}

function borrarUsuario(request, response){
    //obtener del request el valor del id
}



