const express = require("express")
const negocioPedidos = require("../negocio/negocioPedidos")

let router = express.Router()

router.get("/pedidos", listarPedidos)
router.get("/pedidos/:id", buscarPedido)
router.post("/pedidos", insertarPedido)
router.put("/pedidos/:id", modificarPedido)
router.delete("/pedidos/:id", borrarPedido)
//
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

//PUT /pedidos/:id
function modificarPedido(request, response){
    let idPedido = request.params.id
    let pedido = request.body
    pedido._id = idPedido
    
    negocioPedidos
        .modificarPedido(pedido, request.autoridad)
        .then( pedidoModificado => response.json(pedidoModificado))
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error)
        })
}

function borrarPedido(request, response){
    let idPedido = request.params.id
    //
    //
}

//PUT /pedidos/:id/estados
//CT: app/json
//------------------------
//{
//    "estado" : "ACEPTADO"    
//}
function aceptarPedido(request, response){
    
    let idPedido = request.params.id
    let estado = request.body.estado

    negocioPedidos
        .aceptarPedido(idPedido, request.autoridad)
        .then( (factura) => {
            response.json(factura)
        })
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error)
        })        

}