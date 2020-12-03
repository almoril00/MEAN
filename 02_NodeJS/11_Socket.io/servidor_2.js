const socketIO = require("socket.io")
const http = require("http")
const express = require("express")

let app = express()
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


let io = socketIO(servidor)

//Aqui guardamos los alias de los usuarios
let aliasUsuarios = []

io.on('connection', function(socket){
    console.log("Nueva conexión")
    console.log(socket.rooms)
    
    //Por defcto uniremos a los nuevos usuarios a la sala 'General'
    socket.join('General')
    console.log(socket.rooms)

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
    console.log("Alias recibido:"+alias)    

    let encontrado = false
    for(let a of aliasUsuarios){
        if(a==alias){
            encontrado = true
            break
        }
    }
    if(encontrado){
        socket.emit("aliasDuplicado","Este alias ya está siendo utilizado")
        return
    }

    //Cuando alguien se desconecte debemos acordarnos de eliminar su alias del array
    aliasUsuarios.push(alias)

    //Asociamos el alias al socket
    socket.alias = alias

    //Envíamos los alias a todos los usuarios
    io.emit("listaUsuarios", JSON.stringify(aliasUsuarios))
}

function nuevoMensaje(socket, mensajeJSON){
    console.log("Mensaje recibido:")
    console.log(JSON.parse(mensajeJSON))

    for(let room of socket.rooms){
        if(room == socket.id){
            continue
        }
        io.to(room).emit("nuevoMensaje", mensajeJSON)
    }


}

function cambiarSala(socket, sala){
    console.log("El usuario "+socket.alias+" quiere cambiarse a la sala "+sala)

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