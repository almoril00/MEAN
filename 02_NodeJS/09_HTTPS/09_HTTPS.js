//Esta librería no necesita npm install
const https = require("https")
const http = require("http")
const fs = require("fs")

const express = require("express")

//let servidor = https.createServer(certificado, funcion)
//
//Cerftificado:
//{
//  key  : XXX
//  cert : YYY
//}

//Creamos la función express y la configuramos normalmente
let app = express()
app.get("/saludo", function(request, response){
    response.end("HOLA RADIOLA!")
})
app.get("/productos", function(request, response){
    response.end("TOMA LOS PRODUCTOS")
})
app.get("/pedidos", function(request, response){
    response.end("TOMA LOS PEDIDOS")
})

//Creamos el server utilizando el módulo 'https' y le proporcionamos
//la función express y el certificado
let cert = {
    key  : fs.readFileSync("./certificado/server.key"),
    cert : fs.readFileSync("./certificado/server.cert") 
}
let servidorHttps = https.createServer(cert, app)
servidorHttps.listen(443, function(){
    console.log("Esperando peticiones https en el puerto 443")
}) 

//Abrimos tambien el puerto 80 para peticiones http que serán
//redirigidas a https://nuestro_dominio:443
let servidorHttp = http.createServer(function(request, response){
    //response.end("SOLO ADMITIMOS PETICIONES HTTPS")
    response.writeHead(301, {
        'Location': 'https://localhost:443'+request.url
        //add other headers here...
      });
    response.end();
})
servidorHttp.listen(80,function(){
    console.log("Esperando peticiones http en el puerto 80")
})

