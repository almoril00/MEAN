const jwt = require("jsonwebtoken")
const JWTUtil = require("../seguridad/JWTUtil.js")

exports.interceptorAutenticacion = function(request, response, next){

    console.log("---------------------------------------------------")
    console.log("Interceptor autenticacion")

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

    var token = jwt.verify(jwtString, "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDr/DqOMElRxRX/hr4f2GjLyFy85boVkhiMHQrmlAFotFkJOwHxxjeM63vUXUD/lXWBYMdZ40LA4dtaEqYGi2TFlQSHB/lJ7EUZ9K+8/Xa0UCSxz9FHB+dFoQI+L1m7/HIZECVUab66eod7uKkCDGjTdJIZWNhIFIsYwoKWO/XFi1ZuIZ2COI9YCYrQKUyoFhrgaU8cxIzQ9EFx5pLJXa1wZJtNVwYkr8blW1/tZCh1aWRjNM4DbbBlywLolGeZVUMruXcezOL8e3SK+YcioEVXzKzgp3AmSehoLVRVh55BaBeNE9YUlqrGfOaoolFrBNcPlR6w4LVZT7d/J6wMjoGR uno@DESKTOP-OB4CSQL" )
    console.log(token) // bar    



    next()

}


