const { defaultCoreCipherList } = require("constants")
const jwt = require("jsonwebtoken")
const JWTUtil = require("../seguridad/JWTUtil.js")

exports.interceptorAutenticacion = function(request, response, next){

    console.log("---------------------------------------------------")
    console.log("Interceptor autenticacion")

    /*
    console.log("AUTENTICACION DESHABILITADA")
    request.autoridad = {
        _id   : "5faab8180b717134e0010d8b",
        login : "venancia",
        rol   : "CLIENTE"
    }   
    next()
    return
    */

    //Temporal
    if(request.url == "/login" || (request.method.toUpperCase()=="POST" && request.url == "/usuarios")){
        next()
        return
    }

    //Accedemos al header Authorization
    let authorization = request.headers.authorization
    
    if(!authorization){
        response.statusCode = 401
        response.end("Falta la cabecera authorization")
        return
    }
    
    let trozos = authorization.split(" ")
    if( trozos.length!=2 || trozos[0]!="Bearer"){
        response.statusCode = 400
        response.end("La cabecera authorization está mal construida")
        return
    }

    let jwtString = trozos[1]
    console.log("JWT:"+jwtString)

    try{
        var token = jwt.verify(jwtString, JWTUtil.privateKey, {algorithm: 'HS512'}  );
        console.log(token)  
    } catch(e){
        console.log(e)
        let error = {
            codigo : 400,
            descripcion : "Error con el JWT: "+e.message
        }
        response.statusCode = 400
        response.json(error)
        return
    }
    
    //Creamos un objeto autoridad con la informacion extraida del token
    let autoridad = {
        _id   : token._id,
        login : token.login,
        rol   : token.rol
    }
    //Y lo añadimos al request para que llegue hasta la logica de control
    //es un espectacular momento mágico de ilusión y fantasía
    request.autoridad = autoridad

    //Dejamos que la peticion continue hacia la lógica de control
    next()

}



