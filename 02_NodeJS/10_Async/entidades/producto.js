const mongoose = require("mongoose")

let esquemaProducto = new mongoose.Schema({
	//_id         : ObjectId
	referencia  : String,
	categoria   : String,
	nombre      : String,
	fabricante  : String,
	descripcion : String,
	imagen      : String,
	//NOS PERMITIMOS ESTA LICENCIA:
	existencias : Number,
	precio      : Number
})

exports.Producto = mongoose.model('productos', esquemaProducto)



