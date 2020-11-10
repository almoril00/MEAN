const express = require("express")
const negocioUsuarios = require("../negocio/negocioUsuarios")

const router = express.Router()

//La autenticacion con token y SIN ESTADO
//tiene login pero no logout
router.post("/login", login)

exports.router = router

function login(request, response){

    let credenciales = request.body

    console.log("Credenciales:")
    console.log(credenciales.login)
    console.log(credenciales.pw)

    negocioUsuarios
        .buscarPorCredenciales(credenciales.login, credenciales.pw)
        .then( usuario => {
            //Creamos el JWT
            //...
            let token = "achilipu.apu.apu"
            //Lo colocamos en la head de la respuesta
            //...
            response.setHeader('Authorization','Bearer '+token)

            //Colocamos el usuario en el body de la respuesta
            response.json(usuario) 
        })
        .catch( error => {
            response.statusCode = error.codigo
            response.json(error) 
        })

}


