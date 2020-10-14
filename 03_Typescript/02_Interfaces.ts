
//DEfinimos el tipo 'Avion'
interface Avion {
    id:number,
    fabricante:string,
    modelo:string,
    year:number
}

//Si hemos definido un nuevo tipo ya podemos crear variables del tipo Avion

let a1:Avion = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979
}

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
