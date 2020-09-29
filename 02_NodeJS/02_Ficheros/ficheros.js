//Esté módulo viene de serie con Node.JS
const fs = require("fs")


//////////////////////////////////
// LECTURA SÍNCRONA DE FICHEROS //
//////////////////////////////////

//Las rutas relativas en node son desde el directorio en el que se encuentra
//el fichero JS que se está ejecutando
//let contenido1 = fs.readFileSync("./recursos/fichero1.txt")
//let contenido2 = fs.readFileSync("./recursos/fichero2.txt")
//let contenido3 = fs.readFileSync("./recursos/fichero3.txt")

//contenido es un buffer de bytes
//console.log(contenido1)
//Si queremos convertirlo en un string:
//console.log(contenido1.toString());
//let txt4 = contenido1.toString()+contenido2.toString()+contenido3.toString()

////////////////////////////////////
// ESCRITURA SÍNCRONA DE FICHEROS //
////////////////////////////////////

//fs.writeFileSync(ruta_al_fichero, contenido)
//fs.writeFileSync("./recursos/fichero4.txt", txt4)



///////////////////////////////////
// LECTURA ASÍNCRONA DE FICHEROS //
///////////////////////////////////

//ReadFile asincrono NO devuelve el contenido del fichecho
//contenido1 = fs.readFile("./recursos/fichero1.txt")
//contenido1 no es el contenido del fichero!
//console.log(contenido1.toString()); //ZASCA!

//fs.readFile(ruta_al_fichero, function_callback(error, contendido_del_fichero) )

//Leyendo un fichero de manera asíncrona no dispondremos del contenido hasta
//que se ejecute el callback
fs.readFile("./recursos/fichero1.txt", function(error, contenido){
        if(error){
            console.log(error);
            return
        }

        txt1 = contenido.toString()
        console.log(txt1)
    })

//                                                 //
// CONCATENANDO LLAMADAS ASÍNCRONAS: CALLBACK HELL //
//                                                 //

//HILO1

fs.readFile("./recursos/fichero1.txt", function(error, contenido){
        if(error){
            console.log(error);
            return
        }

        let txt1 = contenido.toString()
        console.log(txt1)

        fs.readFile("./recursos/fichero2.txt", function(error, contenido){
                if(error){
                    console.log(error);
                    return
                }
        
                let txt2 = contenido.toString()
                console.log(txt2)

                fs.readFile("./recursos/fichero3.txt", function(error, contenido){
                        if(error){
                            console.log(error);
                            return
                        }
                
                        let txt3 = contenido.toString()
                        console.log(txt3)

                        let txt4 = txt1+txt2+txt3

                        fs.writeFile("./recursos/fichero4.txt", txt4, function(error){
                                if(error){
                                    console.log(error)
                                    return
                                }
                                console.log("Fichero creado")
                            })
                    })                
            })
    })




