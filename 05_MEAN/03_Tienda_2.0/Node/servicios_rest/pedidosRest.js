const express = require("express")
const negocioPedidos = require("../negocio/negocioPedidos")

let router = express.Router()

router.get("/pedidos", listarPedidos)
router.get("/pedidos/:id", buscarPedido)
router.post("/pedidos", insertarPedido)
router.put("/pedidos/:id", modificarPedido)
router.delete("/pedidos/:id", borrarPedido)
router.put("/pedidos/:id/estados", aceptarPedido)

exports.router = router

function listarPedidos(request, response){
    let idUsuario = request.query.idUsuario
    //
    //
}

function buscarPedido(request, response){
    let idPedido = request.params.id
    //
    //
}

function insertarPedido(request, response){
    let pedido = request.body
    negocioPedidos
        .insertarPedido(pedido, request.autoridad)
        .then( pedidoInsertado => {
            response.json(pedidoInsertado)
        })
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error)
        })
}

function modificarPedido(request, response){
    let idPedido = request.params.id
    let pedido = request.body
    pedido._id = idPedido
    //
    //
}

function borrarPedido(request, response){
    let idPedido = request.params.id
    //
    //
}

function aceptarPedido(request, response){
    //
    //
    //
}