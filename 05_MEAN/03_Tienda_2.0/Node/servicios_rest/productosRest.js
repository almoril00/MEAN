const express = require("express")

let router = express.Router()

router.get("/productos", listarProductos)
router.get("/productos/:id", buscarProducto)
router.post("/productos", insertarProducto)
router.put("/productos/:id", modificarProducto)
router.delete("/productos/:id", borrarProducto)

exports.router = router

function listarProductos(request, response){
    
    let nombre = request.query.nombre
    let categoria = request.query.categoria
    let precioMin = request.query.precioMin
    let precioMax = request.query.precioMax

    console.log(request.query)

    let x = {
        nombre : fgffgfh,
        categoria : vfdjdhgfkjsh,
        precioMin: 123,
        precioMax: 567
    }



}

function buscarProducto(request, response){

}


function insertarProducto(request, response){

    console.log("INSERTAR PRODUCTO, LC")
    response.end("QUITAME")

}

function modificarProducto(request, response){

}

function borrarProducto(request, response){

}







