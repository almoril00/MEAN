//npm install jsonwebtoken
const express = require("express")
const negocioUsuarios = require("../negocio/negocioUsuarios")
const jwt = require("jsonwebtoken")
const JWTUtil = require("../seguridad/JWTUtil.js")

//Creamos un router para que guarde la petición de login
const router = express.Router()
//La autenticacion con token y SIN ESTADO
//tiene login pero no logout
router.post("/login", login)
//Exportamos el router
exports.router = router

function login(request, response){

    let credenciales = request.body

    console.log("Credenciales:")
    console.log(credenciales.login)
    console.log(credenciales.pw)

    negocioUsuarios
        .buscarPorCredenciales(credenciales.login, credenciales.pw)
        .then( usuario => {

            let token = jwt.sign(
                { login: usuario.login, roles: usuario.rol }, 
                JWTUtil.privateKey, 
                { algorithm: 'HS512'}
            )
            /*
            {
                "alg": "HS512",
                "typ": "JWT"
            }
            .
            {
                "login" : "venancia",
                "roles" : "CLIENTE",
                "iat"   : FECHA_CREACION 
            }
            .
            gdjheruoñvh9by875u6oighbty9p8uytjg9r8phy598tjgb98ytneu98gu986gheu89hdgfugf
            */

            //Colocando el jwt en la cabecera de la respuesta
            //response.setHeader('Authorization','Bearer '+token)
            //response.setHeader('Access-Control-Expose-Headers', 'Authorization') 
            
            let body = {
                usuario : usuario,
                JWT     : token
            }
            response.json(body) 
        })
        .catch( error => {
            console.log("ERROR:")
            console.log(error)
            response.statusCode = error.codigo
            response.json(error) 
        })

}



