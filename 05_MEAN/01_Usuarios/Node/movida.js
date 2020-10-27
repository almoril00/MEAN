//npm install validatorjs

let Validator = require('validatorjs');
Validator.useLang("es")

let usuario = {
    "login"   : "terencehill",
    "pw"      : "terencehill",
    "rol"     : "CLIENTE",
    "correoE" : "terencehill@gmailit"
}

let reglas = {
    login   : 'required|min:5|max:10',
    pw      : 'required|min:5|max:10',
    correoE : 'required|email'
}

let validation = new Validator(usuario, reglas);


console.log(validation.passes()) //true
console.log(validation.fails())  //false

console.log(validation.errors)




