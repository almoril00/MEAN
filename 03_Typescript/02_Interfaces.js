//////////////
//Interfaces//
//////////////
//Si hemos definido un nuevo tipo ya podemos crear variables del tipo Avion
var a1 = {
    id: 1,
    fabricante: 'Mig',
    modelo: '29',
    year: 1979
};
/*
//No transpila:
let a2:Avion = {
    id : 1,
    fabricante : 'Mig',
    //modelo : '29',
    year : 1979
}

//No transpila:
let a3:Avion = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979,
    movida : "???"
}
*/
//La variable a3 no es del tipo 'Avion' pero si tiene las características necesarias para serlo
var a3 = {
    id: 1,
    fabricante: 'Mig',
    modelo: '29',
    year: 1979
};
//Podemos asignarla a una variable del tipo 'Avion'
var a4 = a3;
//Esto implica que podemos, por ejemplo, obtener un objeto del tipo Avion 
//a partir de un JSON (en realidad nos están dando cuartelillo)
var json = JSON.stringify(a3);
var a5 = JSON.parse(json);
console.log("FIN");
