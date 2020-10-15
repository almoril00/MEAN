//////////
//Clases//
//////////
//-Identidad/estado: datos
//-Funcionalidad: qué hace 
class CuentaBancaria {
    //Funcionalidad
    //No se escribe la palabra reservada 'function'
    toString() {
        return this.IBAN + this.banco + this.sucursal + this.dc + this.libreta;
    }
}
//una vez que hemos creado una clase tenemos un nuevo tipo en la ciudad:
let cb1 = new CuentaBancaria();
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
class Libro {
    //El constructor es una función especial y se indica con
    //la palabra reservada 'constructor'
    //El constructor recibe una serie de parámetros que servirán para inicializar el
    //objeto
    constructor(titulo = null, autor = null, ISBN = null) {
        //Debemos asignar los valores recibidos a los atributos correspondientes
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
    }
}
//
let l1 = new Libro("El corazón de las tinieblas", "Joseph Conrad", "1234");
console.log(l1);
//Si quisieramos crear un libro pero todavía no tuvieramos los valores podríamos
//hacer esto...
let l2 = new Libro(null, null, null);
//Pero es feísimo. Podemos indicar valores por defecto para los parámetros
//constructor(titulo:string=null, autor:string=null, ISBN:string=null){ ... }
//del constructor y así simulamos tener dos:
//-un constructor con lodos los valores
//-un constructor sin parámetros
let l3 = new Libro();
//Si quisieramos crear un libro y solo tuvieramos el ISBN no tenemos más remedio que
//hacerlo así:
let l4 = new Libro(null, null, "5678");
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
class Prueba {
}
let p1 = new Prueba();
p1.dato1 = 123; //
p1.dato4 = 456; //Los dos son visibles
//p1.dato3 = 789 //No transpila: el atributo no es accesible desde el exterior del objeto
class Direccion {
    constructor(ciudad, calle, numero) {
        this.ciudad = ciudad;
        this.calle = calle;
        this.numero = numero;
    }
}
class Cliente {
    constructor(_id, nombre, direccion, telefono) {
        this.direcciones = [];
        this._id = _id;
        this.nombre = nombre;
        this.direcciones.push(direccion);
        this.telefono = telefono;
    }
}
class Producto {
    constructor(_id, nombre, descripcion, afoto, precio) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.afoto = afoto;
        this.precio = precio;
    }
}
class DetallePedido {
    constructor(producto, precio, cantidad, descuento) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descuento = descuento;
    }
}
class Pedido {
    constructor(_id, codigo, fecha, cliente) {
        this._id = _id;
        this.codigo = codigo;
        this.fecha = fecha;
        this.cliente = cliente;
        this.detalles = [];
        this.total = 0;
    }
}
let direccion = new Direccion("Escondido, CA", "C/Falsa", "123");
let cliente = new Cliente(null, "John Lewis", direccion, "555");
let pedido = new Pedido(null, "PED-0", "HOY", cliente);
console.log("===================================");
console.log(pedido);
