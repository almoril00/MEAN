//////////
//Clases//
//////////
//-Identidad/estado: datos
//-Funcionalidad: qué hace 
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria() {
    }
    //Funcionalidad
    //No se escribe la palabra reservada 'function'
    CuentaBancaria.prototype.toString = function () {
        return this.IBAN + this.banco + this.sucursal + this.dc + this.libreta;
    };
    return CuentaBancaria;
}());
//una vez que hemos creado una clase tenemos un nuevo tipo en la ciudad:
var cb1 = new CuentaBancaria();
cb1.IBAN = "ES01";
cb1.banco = 1234;
cb1.sucursal = 5678;
cb1.dc = 90;
cb1.libreta = 1234567890;
//cb1.tocoto = "ARSA"
console.log(cb1);
console.log(cb1.toString());
//
//Constructores
//
//En Typescript nos permiten un constructor (y solo uno)
//No hay sobrecarga de constructores
//
var Libro = /** @class */ (function () {
    //El constructor es una función especial y se indica con
    //la palabra reservada 'constructor'
    //El constructor recibe una serie de parámetros que servirán para inicializar el
    //objeto
    function Libro(titulo, autor, ISBN) {
        if (titulo === void 0) { titulo = null; }
        if (autor === void 0) { autor = null; }
        if (ISBN === void 0) { ISBN = null; }
        //Debemos asignar los valores recibidos a los atributos correspondientes
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
    }
    return Libro;
}());
//
var l1 = new Libro("El corazón de las tinieblas", "Joseph Conrad", "1234");
console.log(l1);
//Si quisieramos crear un libro pero todavía no tuvieramos los valores podríamos
//hacer esto...
var l2 = new Libro(null, null, null);
//Pero es feísimo. Podemos indicar valores por defecto para los parámetros
//constructor(titulo:string=null, autor:string=null, ISBN:string=null){ ... }
//del constructor y así simulamos tener dos:
//-un constructor con lodos los valores
//-un constructor sin parámetros
var l3 = new Libro();
//Si quisieramos crear un libro y solo tuvieramos el ISBN no tenemos más remedio que
//hacerlo así:
var l4 = new Libro(null, null, "5678");
//
//TypeScript tiene un atajo estupendísimo para definir clases y constructores
//
//Despues...
//
//Modificadores de acceso
//
//Typescript añade modificadores de acceso a las clases
//-public
//-protected
//-private
//Pueden colocarse en
//-atributos
//-funciones
//-constructor
//No puede colocarse en la clase
var Prueba = /** @class */ (function () {
    function Prueba() {
    }
    return Prueba;
}());
var prueba1 = new Prueba();
prueba1.dato1 = 123; //
prueba1.dato4 = 456; //Los dos son visibles
//p1.dato3 = 789 //No transpila: el atributo no es accesible desde el exterior del objeto
///////////////////////////////////////////////////////////////////////////
var Direccion = /** @class */ (function () {
    function Direccion(ciudad, calle, numero) {
        this.ciudad = ciudad;
        this.calle = calle;
        this.numero = numero;
    }
    return Direccion;
}());
var Cliente = /** @class */ (function () {
    function Cliente(_id, nombre, direccion, telefono) {
        this.direcciones = [];
        this._id = _id;
        this.nombre = nombre;
        this.direcciones.push(direccion);
        this.telefono = telefono;
    }
    return Cliente;
}());
var Producto = /** @class */ (function () {
    function Producto(_id, nombre, descripcion, afoto, precio) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.afoto = afoto;
        this.precio = precio;
    }
    return Producto;
}());
var DetallePedido = /** @class */ (function () {
    function DetallePedido(producto, precio, cantidad, descuento) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descuento = descuento;
    }
    return DetallePedido;
}());
var Pedido = /** @class */ (function () {
    function Pedido(_id, codigo, fecha, cliente) {
        this._id = _id;
        this.codigo = codigo;
        this.fecha = fecha;
        this.cliente = cliente;
        this.detalles = [];
        this.total = 0;
    }
    Pedido.prototype.addDetalle = function (detalle) {
        //recorrer el array de detalles para ver si ya hay uno que tenga el producto
        //si existe se suman las cantidades
        //si no se añade el detalle:
        pedido.detalles.push(detalle);
        this.calcularTotal();
    };
    Pedido.prototype.calcularTotal = function () {
        //recalcular el total
        var aux = 0;
        for (var _i = 0, _a = pedido.detalles; _i < _a.length; _i++) {
            var dp = _a[_i];
            aux = aux + (dp.cantidad * dp.precio);
        }
        this.total = aux;
    };
    //Métodos accesores
    //Se utilizan cuando algun atributo del objeto es privado y queremos proporcionar
    //un acceso controlado al mismo
    Pedido.prototype.getTotal = function () {
        return this.total;
    };
    Pedido.prototype.getDetalles = function () {
        return this.detalles;
    };
    return Pedido;
}());
var direccion = new Direccion("Escondido, CA", "C/Falsa", "123");
var cliente = new Cliente(null, "John Lewis", direccion, "555");
var pedido = new Pedido(null, "PED-0", "HOY", cliente);
console.log("===================================");
console.log(pedido);
var p1 = new Producto("123", "Chintáfono", "...", "afoto", 10);
var detalle1 = new DetallePedido(p1, 10, 10, 0);
var p2 = new Producto("456", "Imán de buscar voltios", "...", "afoto", 20);
var detalle2 = new DetallePedido(p2, 10, 20, 0);
/*
//AQUI NO, santo tomás
for
pedido.detalles.push(detalle1)
let total:number = 0
for(let dp of pedido.detalles){
    total = total + ( dp.cantidad * dp.precio )
}
pedido.total = total
*/
pedido.addDetalle(detalle1);
pedido.addDetalle(detalle2);
console.log(pedido);
console.log("===================================");
//console.log(pedido.total)
//console.log(pedido.detalles)
console.log(pedido.getTotal());
console.log(pedido.getDetalles());
