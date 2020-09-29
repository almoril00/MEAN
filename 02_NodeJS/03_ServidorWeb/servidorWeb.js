
const http = require("http")
const fs = require("fs")

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
        response.statusCode = 405
        //response.setHeader('Content-Type','text/html')
        response.end()        
        return
    }
    
    leerRecursoEstatico(url, response)

}

function leerRecursoEstatico(url, response){


    fs.readFile("./recursos"+url)


}


