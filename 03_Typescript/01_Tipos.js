//TYPESCRIPT
//--------------------------------
//-Lenguaje creado por Microsoft
//-Superconjunto de JS
//-No puedes hacer con TypeScript algo que no se pueda hacer con JS
//-Orientado a objetos con CLASES
//-No se compila 
//-No se interpreta
//-Se transpila a JS y eso es lo que se ejecuta
//-Hay que instalar un transpilador:
// npm install -g typescript
//
//Variables
//
//En typescript las variables pueden tener TIPO (no es obligatorio)
//Es obligatorio declararlas con var, let o const
//Variables sin tipo:
let x;
let y;
var z;
const movida = 5;
//Las variables sin tipo actuan como tales
x = 5;
x = "HOLA";
x = false;
//Tipos en JS
//let nombre_variable:TIPO = valor
let numero = 5;
let texto = "OLA";
let activo = true;
//Tipo especial 'any'
//Es exactamnte igual que declarar la variables sin indicar el tipo 
let var1;
var1 = true;
var1 = "Pa ke hazes esto?";
var1 = 10;
//
//ARRAYS
//
//Declaramos una variable 'numeros' e indicamos que referenciará a un array no tipado
let numeros;
//Declaramos una variable de tipo array de NUMEROS
let numeros2;
//numeros2.push(5) falla: el array no está inicializado!
//Que no se nos olvide inicalizar el array!!!
let numeros3 = [];
numeros3.push(1);
numeros3.push(2);
numeros3.push(3);
//numeros3.push(true) no se puede!
//numeros3.push("HOLA")
console.log(numeros3.length);
console.log(numeros3);
//
//Funciones
//
//Una funcion JS normal y corriente es admitida en TypeScript
function sumar1(s1, s2) {
    return s1 + s2;
}
console.log(sumar1(10, 30));
//Pero podemos declarar el tipo de los parametros recibidos y el valor devuelto
function sumar2(s1, s2) {
    return s1 + s2;
}
let suma1 = sumar2(25, 75);
console.log(suma1);
//Esto no transpila:
//let suma2:number = sumar2(true,"")
//let suma3:boolean = sumar2(10,20)
//
//Disponemos de un tipo 'void' para las funciones que no devuelven nada
//
function saludar() {
    console.log("Hola!");
}
saludar();
//
//En typescript perdemos los 'parámetros variables'
//
function multiplicar(n1, n2) {
    return n1 * n2;
}
//multiplicar(1) No transpila
multiplicar(1, 2);
//multiplicar(1,2,3) No transpila
//Si queremos una función que reciba un numero indeterminado de parámetros
//debemos indicarlo expresamente con los tresn puntos '...'
//El tipo recibido será un array
//Solo podrá haber un parámetro con los tres puntos
//Y será el último
function multiplicar2(...numeros) {
    let total = 1;
    for (let numero of numeros) {
        total = total * numero;
    }
    return total;
}
console.log(multiplicar2(1));
console.log(multiplicar2(1, 2));
console.log(multiplicar2(1, 2, 3));
console.log(multiplicar2(1, 2, 3, 4));
console.log("FIN");
