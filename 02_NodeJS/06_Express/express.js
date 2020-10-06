//npm install express

const express = require('express')

//Dentro del módulo express hacen el require de 'http'
//const http = require('http')

let app = express()
//Dentro de la función listen está el siguiente código:
//http.createServer( function )
//    .listen(4000, callback) 
//})
app.listen(5000, function(){
    console.log("Esperando peticiones en el puerto 5000")
})


//////////////////////////
// CONFIGURANDO EXPRESS //
//////////////////////////


//URLS y METODOS:
app.get('/saludo', saludar)
app.post('/insertar', insertar)

//Las funciones que asignamos a los distintos pares METODO+URL 
//recibirán el request y el response como parámetro
function saludar(request, response){
    response.end("Hola que tal")
}

function insertar(request, response){
    response.end("Recurso insertado")
}

//Podemos definir el callback en la propia llamada a get, post, put...
//Pero QUEDA FEISIMO!
app.get('/pagina', function(request, response){
    let html = `
        <html>
            <body>
                <marquee>
                    Html generado dinamicamente con Node.JS + Express
                </marquee>
            </body>
        </html>`;
    response.setHeader('Content-type', 'text/html')
    response.end(html)
})

//
//Accediendo a los query params (?)
//

//Los query params NO se indican en la url
app.get("/peliculas", listarPeliculas)

function listarPeliculas(request, response){
    //Express añade al request una propiedad llamada 'query' en la que estarán los parámetros
    //query es un objeto y sus propiedades son los parámetros
    console.log("Listando las películas. Parámetros recibidos:")
    console.log("Genero:"+request.query.genero)
    console.log(request.query.genero)
    console.log(request.query.year)
    response.end("Listado con las peliculas...")
}

