//npm install socket.io
const socketIO = require("socket.io")

const http = require("http")
const express = require("express")
const { response } = require("express")


//Socket.io no es una implementación de websockets (aunque lo utiliza)

//Necesitamos abrir un puerto para recibir las solicitudes de conexión
//Para ello podemos utilizar el módulo 'http' o 'express'

//Creamos un objeto server normal y corriente

let app = express()
app.use(express.static("./recursos"))

let servidor = http.createServer(app)
servidor.listen(10000, function(){
    console.log("Esperando peticiones en el puerto 10000")
})

//Una vez que disponemos de un objeto server escuchando en un puerto
//podemos crear la infraestructura de Socket.io
let io = socketIO(servidor)

//
let aliasUsuarios = []

//En socket.io todo funciona por EVENTOS

//Eventos:
//-un cliente se ha conectado
//-un cliente se ha desconectado
//-un cliente nos ha enviado un mensaje

//io.on(<nombre_evento>, function manejadora de ese evento)

//Socket.io lleva 'la cuenta' de todas las conexiones abiertas con los
//distintos clientes
//Cuando se conecta uno nuevo nos pasan el socket por parámetro por si
//queremos hacer algo con el (queremos)
io.on('connection', function(socket){
    console.log("Nueva conexión")

    //Lo que hacemos con el socket que nos entregan es 'configurarlo'
    socket.on('alias', function(alias){
        nuevoAlias(socket, alias)
    })

    socket.on('mensaje', function(mensajeJSON){
        nuevoMensaje(socket,mensajeJSON)
    })

    socket.on("disconnect", function(){
        usuarioDesconectado(socket)
    })

})


function nuevoAlias(socket, alias){
    //En estas funciones 'this' es el socket
    //console.log(this)
    console.log("Alias recibido:"+alias)    

    let encontrado = false
    for(let a of aliasUsuarios){
        if(a==alias){
            encontrado = true
            break
        }
    }
    if(encontrado){
        //Para enviar desde el servidor un mensaje a un cliente concreto
        //debemos usar su socket
        socket.emit("aliasDuplicado","Este alias ya está siendo utilizado")
        return
    }

    //Cuando alguien se desconecte debemos eliminar su alias del array
    aliasUsuarios.push(alias)

    //Asociamos el alias al socket
    socket.alias = alias

    //Envíamos los alias a todos los usuarios
    io.emit("listaUsuarios", JSON.stringify(aliasUsuarios))
}

function nuevoMensaje(socket, mensajeJSON){
    console.log("Mensaje recibido:")
    console.log(JSON.parse(mensajeJSON))

    //si quisieramos enviar una respuesta inmediata a este mensaje...
    //socket.emit("ACK","Mensaje recibido")

    //si queremos enviar un mensaje a todos los sockets que haiga:
    io.emit("nuevoMensaje",mensajeJSON)
}

function usuarioDesconectado(socket){
    console.log("Usuario desconectado:"+socket.alias)
    //Eliminamos el alias de nuestra lista de usuarios
    for(let a=0; a<aliasUsuarios.length; a++){
        if(aliasUsuarios[a]==socket.alias){
            aliasUsuarios.splice(a,1)
            break
        }
    }
    //Enviamos la lista a todos los que sigan conectados
    io.emit("listaUsuarios", JSON.stringify(aliasUsuarios))
}