const Factura = require("../entidades/factura").Factura


//En esta aplicacion una factura se crea a partir del pedido que se está aceptando
//Del se extraen bastantes de los valores que acaban en la factura
exports.emitirFactura = function(pedido, autoridad){

    return new Promise(function(resolve, reject){

        //VALIDACION
            //->reject

        //AUTORIZACION
            //->reject

        let facturaMG = new Factura()

        //Extraemos del pedido los datos que deben colocarse en la factura
        facturaMG.usuario   = pedido.usuario
        facturaMG.total     = pedido.total
        facturaMG.detalles  = pedido.detalles
        facturaMG.formaPago = pedido.formaPago
        
        //Creamos los valores propios de la factura
        facturaMG.fechaFacturacion = null
        facturaMG.dirFacturacion   = pedido.dirEntrega 
        facturaMG.estado           = "PENDIENTE_COBRO"

        facturaMG
            .save()
            .then( facturaInsertada => {
                resolve( facturaInsertada )
            })
            .catch( error => {
                console.log(error)
                reject({ codigo:500, descripcion:"Error en la base de datos"})//MAL: 500
            })
    })
}



