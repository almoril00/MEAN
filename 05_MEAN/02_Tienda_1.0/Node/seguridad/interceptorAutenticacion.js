const jwt = require("jsonwebtoken")
const JWTUtil = require("../seguridad/JWTUtil.js")

exports.interceptorAutenticacion = function(request, response, next){

    console.log("---------------------------------------------------")
    console.log("Interceptor autenticacion")

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
        console.log(token) // bar    
    } catch(error){
        console.log(error)
    }

    next()

}


