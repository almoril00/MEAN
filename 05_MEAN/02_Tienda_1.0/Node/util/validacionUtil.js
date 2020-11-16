//npm install validatorjs
let Validator = require('validatorjs');
Validator.useLang("es")

//
//Función guarrindonga para comprobar que un objeto tiene unicamente propiedades permitidas
//y los valores adecuados
//
exports.validar = function(objeto, propiedades, reglas){
    
    //Comprobamos que el objeto tenga solo propiedades admitidas
    for(let propiedad in objeto){
        let encontrado = false
        for(let propiedadAdmitida of propiedades){
            if(propiedadAdmitida == propiedad){
                encontrado = true
                break
            }
        }
        if(!encontrado){
            return { propiedadInvalida : propiedad }
        }
    }

    let validador = new Validator(objeto, reglas)
    if(validador.fails()){
        return validador.errors.errors
    }

}