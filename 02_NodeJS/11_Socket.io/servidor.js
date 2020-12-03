//npm install socket.io
const socketIO = require("socket.io")
const http = require("http")
const express = require("express")

/*
//PAL CORS:

en el servidor :
let io = socketIO(consola,{
  cors: {
    origin: "http://localhost:10000",
    methods: ["GET", "POST"]
  }
});
 y al cliente 
socket = io.connect("http://localhost:10000",
                        {
                            xdomain: true,
                            //forceNew : true,
                            reconnection : false
                        })
*/

//Socket.io no es una implementación de websockets (aunque lo utiliza)
//
//Necesitamos abrir un puerto para recibir las solicitudes de conexión
//Para ello podemos utilizar el módulo 'http' o 'express'
//
//Creamos un objeto server normal y corriente

let app = express()
//Dentro de 'recursos está el cliente html+js
app.use(express.static("./recursos"))
//Publicamos un api RESt para que los clientes soliciten las salas
let salas = [ 'General', 'Sala 1', 'Sala 2', 'Sala 3', 'Sala 4' ]
app.get('/salas', function(request, response){
    response.json(salas)
})

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

    //Rooms en socket.io
    //Identificadas con una cadena de texto
    //Los sockets pueden unirse a cualquier número de 'rooms' con socket.join('nombre_room')
    //Pueden abandonarlas con socket.leave('nombre_room')
    //Para enviar un mensaje a todos los sockets que estes en un 'room':
    //io.to('nombre_room').emit('nombre_mensaje','mensaje)
    //Se pueden concatenar varias salas y así enviar un mensaje a los sockets de todas ellas
    //io.to('nombre_room_1').to('nombre_room_2').emit('nombre_mensaje','mensaje')

    //Para averiguar en cuantas 'rooms' está un socket podemos invocar socket.rooms
    //Devuelve un SET con todas las rooms

    //Nada mas crearse un socket este se añade a una 'room' en la que únicamente está él
    //El nombre de ese 'room' será el id del socket
    console.log(socket.rooms)
    
    //Por defecto uniremos a los nuevos usuarios a la sala 'General'
    socket.join('General')
    console.log(socket.rooms)

    //Lo que hacemos con el socket que nos entregan es 'configurarlo'
    socket.on('alias', function(alias){
        nuevoAlias(socket, alias)
    })

    socket.on('mensaje', function(mensajeJSON){
        nuevoMensaje(socket,mensajeJSON)
    })

    socket.on('cambiarSala', function(sala){
        cambiarSala(socket, sala)
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

    //si queremos enviar un mensaje a todos los sockets que 
    //haya, independientemente de en que salas estén:
    //io.emit("nuevoMensaje",mensajeJSON)    

    //Si queremos enviar un mensaje a los sockets que estén en una sala:

    for(let room of socket.rooms){
        if(room == socket.id){
            continue
        }
        io.to(room).emit("nuevoMensaje", mensajeJSON)
    }

}

function cambiarSala(socket, sala){
    console.log("El usuario "+socket.alias+" quiere cambiarse a la sala "+sala)

    //Cada vez que hacemos join metemos al socket en una nueva sala
    //Nos interesa que solo esté en su sala privada y en la recibida
    let rooms = socket.rooms
    //Sacamos al socket de todas las salas en las que esté
    for(room of rooms){
        //Excepto de su sala privada
        if(room != socket.id){
            socket.leave(room)
        }
    }
    socket.join(sala)
    console.log(socket.rooms)
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