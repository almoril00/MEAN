
const http = require("http")
const fs = require("fs")

let statusCodes = {
    404 : "Recurso no encontrado",
    405 : "Método no permitido",
    400 : "Petición incorrecta" 
}

//mime types

//Creamos el servidor y proporcionamos la función que procesará TODAS las peticiones
let servidor = http.createServer( procesarPeticion )
//La llamada a 'listen' es asíncrona
servidor.listen(3000, function(){
    console.log("Esperando peticiones en el puerto 3000...")
})

//Es el hilo del Evento Loop el que ejecuta esta función
function procesarPeticion(request, response){
    
    let metodo = request.method.toUpperCase()
    let url = request.url //Incluye tambien los parámetros
    
    console.log("Peticion recibida");
    console.log("Metodo:"+metodo);
    console.log("Ruta  :"+url)

    if(metodo != "GET"){
        devolverError(405, response)        
        return
    }
    
    leerRecursoEstatico(url, response)

}

function devolverError(statusCode, response){
    response.statusCode = statusCode

    let html = `
        <html>
        <body>
            <h1 align="center">
                <font color="red">
                    ${statusCode}
                </font>
                <br/>
                
                <div align="center">
                    ${ statusCodes[statusCode] }
                </div>
            </h1>
        </body>
        </html>
        `
    response.setHeader('Content-Type','text/html')
    response.end(html)

}

function leerRecursoEstatico(url, response){

    //let trozos = url.split("?")
    //let recurso = trozos[0]

    let recurso = url.split("?")[0]

    fs.access("./recursos"+recurso, function(error){
        if(error){
            devolverError(404, response)       
            return             
        }
        fs.readFile("./recursos"+recurso, function(error, contenido){
            if(error){
                devolverError(404, response)       
                return             
            }           
            response.setHeader('Content-Type','text/html')
            response.end(contenido)
        })
    })

}


