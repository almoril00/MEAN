

exports.interceptorAutenticacion = function(request, response, next){

    console.log("---------------------------------------------------")
    console.log("Interceptor autenticacion")

    //Accedemos al header Authorization
    let authorization = request.headers.authorization
    console.log("Auth:"+authorization)

    let trozos = authorization.split(" ")

    if(!authorization){
        response.statusCode = 401
        response.end("Falta la cabecera authorization")
        return
    }

    if( trozos.length!=2 || trozos[0]!="Bearer"){
        response.statusCode = 400
        response.end("La cabecera authorization está mal construida")
        return
    }

    let jwtString = trozos[1]
    console.log("JWT:"+jwtString)


    next()

}


