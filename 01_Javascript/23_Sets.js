
//Un set en JS es una estructura de datos similar a un array pero:
//-no es indexado
//  -sus elementos no guardan ninguna posicion
//-no es asociativo
//  -sus elementos tampoco estarán asociados a claves
//-no admite elementos duplicados

const { set } = require("mongoose")

//Lo creamos con el prototipo 'Set'
let set1 = new Set()
//Añadimos elementos con 'add'
set1.add("hola")
set1.add("que")
set1.add("tal")
set1.add("tal") //Se ignora
set1.add("tal") //Se ignora!
set1.add("y tal") 

console.log(set1)

//Para elmiminar un elemento del set invocamos delete(elem_a_eliminar)
set1.delete("y tal")
console.log(set1)

//Iterando un set
for(let elem of set1){
    console.log(elem)
}

//Tambien podemos crear un set con valores inciales
let set2 = new Set([ "uno", "dos", "tres" ] )
console.log(set2)
