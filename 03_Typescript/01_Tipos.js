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
// npm intall -g typescript
//
//Variables
//
//En typescript las variables pueden tener TIPO (no es obligatorio)
//Es obligatorio declararlas con var, let o const
//Variables sin tipo:
var x;
var y;
var z;
var movida = 5;
//Las variables sin tipo actuan como tales
x = 5;
x = "HOLA";
x = false;
//Tipos en JS
//let nombre_variable:TIPO = valor
var numero = 5;
var texto = "OLA";
var activo = true;
//Tipo especial 'any'
//Es exactamnte igual que declarar la variables sin indicar el tipo 
var var1;
var1 = true;
var1 = "Pa ke hazes esto?";
var1 = 10;
//
//ARRAYS
//
//Declaramos una variable 'numeros' e indicamos que referenciará a un array no tipado
var numeros;
//Declaramos una variable de tipo array de NUMEROS
var numeros2;
//numeros2.push(5) falla: el array no está inicializado!
//Que no se nos olvide inicalizar el array!!!
var numeros3 = [];
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
var suma1 = sumar2(25, 75);
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
function multiplicar2() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var total = 1;
    for (var _a = 0, numeros_1 = numeros; _a < numeros_1.length; _a++) {
        var numero_1 = numeros_1[_a];
        total = total * numero_1;
    }
    return total;
}
console.log(multiplicar2(1));
console.log(multiplicar2(1, 2));
console.log(multiplicar2(1, 2, 3));
console.log(multiplicar2(1, 2, 3, 4));
console.log("FIN");
