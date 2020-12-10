

function enviarPeticion(){
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve("HOLA"),2000)
    })
}

//enviarPeticion()
//.then( rs => console.log(rs))

async function prueba(){
    rs = await enviarPeticion()
    console.log(rs)
}

prueba()

console.log("FIN")
