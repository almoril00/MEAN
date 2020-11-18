//npm install mongoose
const mongoose = require("mongoose")

//Esta url tiene tambien el esquema al que queremos conectarnos
const url="mongodb://localhost:27017/tienda" 

//Delegamos en Mongoose la gestión de la conexion
//La llamada a connect es asíncrona
mongoose
    .connect(url, { useNewUrlParser: true, 
                    useUnifiedTopology: true })
    .then(pruebas)
    .catch( error => console.log(error))

function pruebas(){

    //Aqui ya tenemos la conexión pero ni la catamos
    console.log("Conectado!")

    //En Mongoose definimos los ESQUEMAS que se utilizaran en la base de datos
    //Para cada colección definiremos un objeto con sus propiedades
    //Y SUS TIPOS
    //-ObjectId
    //-String
    //-Number
    //-Date
    //-boolean
    //-buffer
    //-Object 
    //-Decimal128
    //-Array
    //-Map 

    //Pasos a seguir
    //-definir el esquema
    //-a partir del esquema crear el modelo
    //-una vez que tengamos el modelo ya podemos disfritar de la comodidad que resulta
    //de que hagan las cosas por ti

    //Cuando creamos el esquema de una coleccion no indicamos cual será la coleccion
    let esquemaUsuario = new mongoose.Schema({
        //Si queremos que sea la base de datos la que le asigna el valor al
        //_id no lo añadimos al esquema (pero luego lo tendremon)
        //_id     : ObjectId,
        login     : String,
        pw        : String,
        nombre    : String,
        rol       : String,
        correoE   : String,
        idioma    : String,
        direccion : String,
        telefono  : String
    })

    //Creamos el modelo
    //let Modelo = mongoose.model('nombre de la colección', esquema)
    //Cuando definimos el modelo indicamos el nombre de la colección
    //y nos olvidamos de él para siempre
    //mongoose.model devuelve una función prototipo
    //si la invocamos con 'new' tendremos un hermoso objeto cuyas propiedades
    //son las definidas en el esquema y que además tiene una serie de
    //funciones relacionadas con la persistencia

    //Prototipo.count() -> cuantos documentos hay

    let Usuario = mongoose.model('usuarios', esquemaUsuario)

    //Una vez que tenemos el modelo de usuario (el protipo) usamos 'new' para crear usuarios
    let usr = new Usuario()

    //console.log(usr)
    //for(let propiedad in usr){
    //    console.log(propiedad+": "+usr[propiedad])
    //}

    usr.login  = "budspencer"
    usr.pw     = "1234567890"
    usr.nombre = "Bud Spencer"
    //Este se ignorará a la hora de hacer la insercion!
    usr.tocoto = "ARSA"

    ////////////
    //INSERTAR//
    ////////////

    //La llamada a 'save' inserta el objeto en la colección correspondiente
    //Save es asíncrono y funciona con callbacks y promesas
    //Una vez insertado nos proporcionan el objeto tal cual haya quedado
    //en la base de datos
    //usr.save()
    //   .then( clienteInsertado => console.log(clienteInsertado))
    //   .catch( error => console.log(error))  
    
    //Tambien podemos utilizar un objeto normal y corriente
    //para incializar la entidad

    let usr2 = {
        "login": "terencehill",
        "pw": "1234567890",
        "nombre": "Terence Hill",
        "rol": "CLIENTE",
        "correoE": "terencehill@noseque.es",
        "idioma": "ES",
        "direccion": "C/Falsa, 321",
        "telefono": "333 222 666",
        "culo" : "JOJOJO" //Este se ignorará
    }
    //usr2.save() //ZASCA!

    let usr3 = new Usuario(usr2)
    //usr3.save()  
    //    .then( usuarioInsertado => console.log(usuarioInsertado))
    //    .catch( error => console.log(error)) 


    /////////////////
    //BUSCAR POR ID//
    /////////////////

    Usuario
        .findById("5fb3ff7245ce7e15e08e3057")
        .then( usuarioEncontrado => {
            //console.log("=======================================================")
            //console.log(usuarioEncontrado)
            //for(p in usuarioEncontrado){
            //    console.log(p)
            //}
        })
        .catch( error => console.log(error) )

    //////////
    //BORRAR//
    //////////

    let idABorrar = "5fb40eaf35cdd828ccdb03c6"

    //Podemos buscar primero el objeto y luego
    //pedirle que se borre (cruel y encima son dos consultas)
    /*
    Usuario
        .findById(idABorrar)
        .then( usuarioEncontrado => {
            //Este usuario es un objeto 'mongoose' que cuenta con
            //todas las funciones extra
            return usuarioEncontrado.remove()
        })
        .then( x => {
            console.log("Usuario borrado")
        })
        .catch( error => console.log(error))
    */

    //Mongoose cuenta con una funcion que borra por _id, ahorrandonos
    //el find, código y la crueldad innecesaria
    Usuario
        .findByIdAndRemove("5fb40eaf35cdd828ccdb03c6")
        .then( documentoQueSeHaBorrado => console.log("Usuario borrado"))
        .catch( error => console.log(error))


    /////////////
    //MODIFICAR//
    /////////////
    
    Usuario
        .findById("5faab6050b717134e0010d8a")
        .then( usuarioEncontrado => {
            console.log("=======================================================")
            console.log(usuarioEncontrado)
            usuarioEncontrado.telefono = "987 654 321"
            return usuarioEncontrado.update()
        })
        .then(x => {
            console.log("Usuario modificado")
        })
        .catch( error => console.log(error) )

    //Usuario.findByIdAndUpdate


}



console.log("FIN")