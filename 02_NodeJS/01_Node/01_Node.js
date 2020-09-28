//
//En node podremos hacer cosas imposibles en el navegador
//-acceder al sistema de archivos
//-comunicarnos con otras aplicaciones (por ejemplo la BB.DD)
//
//En node.js no disponemos de la mayoría de los objetos implícitos del navegador
//-document
//-window
//-alert
//-localStorage/sessionStorage
//-...
//
//Algunos si están:
//-console
//-JSON
//-...

console.log("Hola mundo")

const http = require("http")


let servidor = http.createServer( function(request, response){

    console.log("Petición recibida")

    let html = `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Nuestra primera web chispas</title>
            </head>
            <body>
                <h2 align="center">
                    <font color="lightGreen">
                        Contenido HTML generado dinámicamente
                    </font>
                </h2>

                <table align="center" border="1">
                    <tr>
                        <th>Titulo</th>
                        <th>Director</th>
                    </tr>
                </table>
            </body>
        </html>`;
    response.statusCode = 200 //Por defecto tiene el valor 200
    response.setHeader('Content-Type','text/html')
    //Lo que pasemos por parámetro a la función 'end' acaba en el body
    //de la respuesta
    response.end(html)

})


//Le indicamos al servidor en que puerto va a escuchar (y lo 'arrancamos')
servidor.listen(2000) //La llamada a 'listen' es A S I N C R O N A

console.log("Esperando peticiones (mentira)")



