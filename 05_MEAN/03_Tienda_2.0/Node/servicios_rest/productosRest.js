const express = require("express")
const negocioProductos = require("../negocio/negocioProductos")

let router = express.Router()

router.get("/productos", listarProductos)
router.get("/productos/:id", buscarProducto)
router.post("/productos", insertarProducto)
router.put("/productos/:id", modificarProducto)
router.delete("/productos/:id", borrarProducto)

exports.router = router

function listarProductos(request, response){

    //Obtener el criterio del request
    let criterio = JSON.parse(request.query.criterio)
    negocioProductos
        .listarProductos(criterio)
        .then( listadoProductos => {
            response.json(listadoProductos)
        })
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error)
        })
}

function buscarProducto(request, response){

    let _id = request.params.id
    negocioProductos
        .buscarProducto(_id)
        .then( producto => {
            response.json(producto)
        })
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error)
        })
}

function insertarProducto(request, response){

    let producto = request.body
    negocioProductos
        .insertarProducto(producto,request.autoridad)
        .then( productoInsertado => {
            response.json(productoInsertado)
        })
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error)
        })

}

function modificarProducto(request, response){

}

function borrarProducto(request, response){

}







