//npm install validatorjs

let Validator = require('validatorjs');

let usuario = {
    "login"   : "terencehill",
    "pw"      : "terencehill",
    "rol"     : "CLIENTE",
    "correoE" : "terencehill@gmail.it"
}

let rules = {
    login   : 'required|min:5|max:15',
    pw      : 'required|min:5|max:15',
    correoE : 'required|email'
};

let validation = new Validator(usuario, rules);

console.log(validation.passes()) 
console.log(validation.fails()) 

console.log(validation.errors)


