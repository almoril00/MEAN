
//
let palabras = [ 'hello', 'doctor', 'name', 'continue', 'yesterday', 'tomorrow']

//
//FOR EACH
//
//Para recorrer un array
//No devuelve nada
//Array.forEach(consumer)
//consumer: una función que recibe un valor, lo procesa y que 'void'

//palabras.forEach( function(elemento) {
//    console.log(elemento)
//})

console.log("=====================================")
palabras.forEach( elemento => console.log(elemento) )

//
//REVERSE
//
//Le da la vuelta al array como a un calcetín
console.log("=====================================")
console.log(palabras.reverse())

//
//FIND
//
//Para buscar elementos en un array
//Devuelve el elemento encontrado
//array.find(predicate)
//predicate: una funcion que recibe un valor, lo procesa y devuelve un booleano
console.log("=====================================")

let palabraBuscada = "name"
let encontrado = false
for(let palabra of palabras){
    if(palabra==palabraBuscada){
        encontrado = true
        break
    }
}
console.log(encontrado)
//find recibe una funcion a la que se le pasan cada uno de los elementos del array
//dentro se compara con el elemento buscado.
//si es igual se devuelve true y el bucle finaliza (devuelve el primero que coincida)
//si no se devuelve false y siguen buscando
//let elementoEncontrado = palabras.find( function(elemento){
//    return elemento==palabraBuscada
//})

let elementoEncontrado = palabras.find( elemento => elemento==palabraBuscada )

if(elementoEncontrado){
    console.log("Encontrado:"+elementoEncontrado)
} else {
    console.log(":(")
}

//
//MAP
//
//Para transformar una array en otro
//Para conseguir un array a partir de otro haciendo cierta transformación a los elementos
//Devuelve un array
console.log("=====================================")
//A partir del array de palabras obtener un array con la longitud de cada palabra
//let longitudPalabras = []
//for(let palabra of palabras){
//    longitudPalabras.push(palabra.length)
//}
//console.log(longitudPalabras)

//longitudPalabras = palabras.map( function(elemento){
//    return elemento.length
//})

let longitudPalabras = palabras.map( elemento => elemento.length)
console.log(longitudPalabras)

//Pasar a mayusculas las palabras del array
let palabrasMayusculas = palabras.map( elemento => elemento.toUpperCase())
console.log(palabrasMayusculas)

let numeros = [ 1,2,3,4,5,6,7,8,9 ]
let numeros2 = numeros.map( numero => numero*10 )
console.log(numeros2)

//
//FILTER
//
//A partir de un array se obtiene otro .khjgjdhgzfjkdhuilkjerfen<klsdhjkfhkjvh uvjkhl bhcxmnbfdsbmn.sfdbnngfds.
//Recibe un predicate
console.log("=====================================")
//Quiero solo las palabras de más de 5 caracteres
//let palabras2 = []
//for(let palabra of palabras){
//    if(palabra.length>5){
//        palabras2.push(palabra)
//    }
//}
//console.log(palabras2)

//let palabras2 = palabras.filter( function(palabra){
//    //Si devolvemos true el elmento 'pasa el filtro' y se añade al nuevo array
//    //Si devolvemos false, pues no
//    return palabra.length > 5
//})
//console.log(palabras2)

let palabras2 = palabras.filter( palabra => palabra.length>5 )
console.log(palabras2)

//
//REDUCE
//
//A partir de un array con múltiples elementos devuelve un único valor
//array.reduce( (resumen, siguiente_valor ) => return calculo )

console.log("=====================================")

//Calcular la suma de los numeros
//let total = 0
//for(let num of numeros){
//    total = total + num
//}
//console.log(total)

//Sumar los números
//let total = numeros.reduce( function(acumulador, elemento) {
//    console.log(acumulador, elemento)
//    return acumulador + elemento
//} )
//console.log("Total:"+total)

let total = numeros.reduce( (acumulador,numero) => acumulador+numero ) 
console.log("Total:"+total)

//Concatenar las palabras
let palabrasConcatenadas = palabras.reduce( (acumulador, palabra) => acumulador+"-"+palabra )
console.log(palabrasConcatenadas)

let facturas = [ 
    {
        codigo : "FAC-1",
        total  : 100,
        estado : "COBRADA"
    },
    {
        codigo : "FAC-2",
        total  : 1800,
        estado : "NO COBRADA"
    },
    {
        codigo : "FAC-3",
        total  : 300,
        estado : "COBRADA"
    },
    {
        codigo : "FAC-4",
        total  : 150,
        estado : "NO COBRADA"        
    },
    {
        codigo : "FAC-5",
        total  : 700,
        estado : "COBRADA"
    },
    {
        codigo : "FAC-6",
        total  : 1000,
        estado : "NO COBRADA"        
    }
]

//Encontrar la factura de mayor importe
let facturaMax = facturas.reduce( (facturaMax, factura) => {
    if(factura.total > facturaMax.total){
        return factura
    }
    return facturaMax
})
console.log("FacturaMax:",facturaMax)

//
//EVERY
//
//boolean = array.every(predicado)
//Aplica un predicado a todos los elementos y devuelve 
//-true si lo complen todos
//-false si alguno no lo hace
console.log("=====================================")
let numeros3 = [ 6,7,8,9,10,11,12,4 ]
let ok = numeros3.every( numero => numero>5 )
console.log("Todos los numeros son mayores que 5:"+ok)

//
//FLAT MAP
//
//Tenemos un array de arrays.
//Cada uno de esos arrays llega a flat y flat 'desenrrolla' el array
console.log("=====================================")
let array1 = [ 1,2,3,4 ]
let array2 = [ 5,6 ]
let array3 = [ 7,8,9,10 ]
let arrayses = [ array1, array2, array3 ]

let todosLosNumeros = arrayses.flat()
console.log("Todos los numeros:", todosLosNumeros)

//Sumar todos los numeros contenidos en los distintos arrays

//Al flat llegan arrays de números y de el salen los numeros sueltos
//llegan al reduce y se van sumando
let total2 = arrayses.flat().reduce( (acumulador, numero) => acumulador+numero )
console.log(total2)


let clientes = [
    { 
        nombre : "Ringo",
        facturas : [
            { codigo:"FAC-1", total: 25 },
            { codigo:"FAC-5", total: 50 },
            { codigo:"FAC-9", total: 75 },
        ]
    },
    { 
        nombre : "Paul",
        facturas : [
            { codigo:"FAC-2", total: 100 },
            { codigo:"FAC-6", total: 125 },
            { codigo:"FAC-10", total: 150 },
        ]
    },
    { 
        nombre : "George",
        facturas : [
            { codigo:"FAC-3", total: 175 },
            { codigo:"FAC-7", total: 200 },
            { codigo:"FAC-11", total: 225 },
        ]
    },
    { 
        nombre : "John",
        facturas : [
            { codigo:"FAC-4", total: 250 },
            { codigo:"FAC-8", total: 275 },
            { codigo:"FAC-12", total: 300 },
        ]
    }
]

//Queremos una lista con todas las facturas

//Esto da un array con todos los nombre:
console.log(clientes.map( cliente => cliente.nombre ))
//Esto no es lo que queremos: devuelve un array con los arrays de facturas de cada cliente:
//console.log(clientes.map( cliente => cliente.facturas )) 

//-van saliendo los clientes uno a uno
//-llegan al map y de él salen arrays de facturas
//-que llegan al flat y los 'desenrrolla' (aplana) introduciendo cada uno de los elementos en un 
// único array, que es lo que se devuelve al final
let facturas2 = clientes.map( cliente => cliente.facturas ).flat() 
console.log(facturas2)

//Ahora el total cobrado a todos los clientes
console.log("=====================================")
/*
let facturaTotal = 
    clientes //de aqui salen clientes
    .map( cliente => cliente.facturas) //de aqui salen arrays de facturas
    .flat() //de aqui salen facturas
    .reduce( (acumulador, factura) => {
        console.log(acumulador, factura)
        acumulador.total += factura.total
        return acumulador
    }) //de aqui sale UNA FACTURITA RIQUITA
console.log("Total:"+facturaTotal.total)
*/

let totalfina =
    clientes //de aqui salen clientes
    .map( cliente => cliente.facturas) //de aqui salen arrays de facturas
    .flat() //de aqui salen facturas
    .map( factura => factura.total) //De aqui salen números
    .reduce( (acumulador, total) => acumulador+=total ) //de aqui sale UN NUMERO
console.log("Total:"+totalfina)

totalfina =
    clientes //de aqui salen clientes
    .map( cliente => cliente.facturas) //de aqui salen arrays de facturas
    .flat() //de aqui salen facturas
    .map( factura => factura.total) //De aqui salen números
    .reduce( (acumulador, total) => acumulador+=total ) //de aqui sale UN NUMERO
console.log("Total:"+totalfina)

//Si vas a hacer un map y luego un flat pues haz un flatMap
//  facturas3 = clientes.map( cliente => cliente.facturas ).flat()
let facturas3 = clientes.flatMap( cliente => cliente.facturas ) 
console.log(facturas3)

totalfina =
    clientes //de aqui salen clientes
    .flatMap( cliente => cliente.facturas) //de aqui salen las facturas sueltas
    //.flat() //Este ya no hace falta
    .map( factura => factura.total) //De aqui salen números
    .reduce( (acumulador, total) => acumulador+=total ) //de aqui sale UN NUMERO
console.log("Total:"+totalfina)


//
//SE PUEDEN CONCATENAR PARA MAYOR JOLGORIO Y DISFRUTE DEL PERSONAL
//

//Cuanto hemos cobrado de momento?

let totalCobrado = 
    facturas //De aqui salen facturas
    .filter( factura => factura.estado=="COBRADA") //De aqui salen facturas COBRADAS
    .map( factura => factura.total ) //De aqui sale el total de la factura
    .reduce( (acumulador, total) => acumulador = acumulador + total ) //De aqui sale la suma de todos los totales
console.log("Total cobrado: "+totalCobrado) //de aqui salen caracteres en la consola


//

/*
let coche = {
    marca : "Fiat",
    modelo : "Uno 45s",
    color : "Rojo"
}

console.log("marca" in coche)
console.log("movida" in coche)
*/
