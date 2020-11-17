//npm install validatorjs
let Validator = require('validatorjs');
Validator.useLang("es")

exports.validar = function(objeto, reglas){
    
    let validador = new Validator(objeto, reglas)
    if(validador.fails()){
        return validador.errors.errors
    }

}