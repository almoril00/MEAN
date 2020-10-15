
//////////
//Clases//
//////////


//-Identidad/estado: datos
//-Funcionalidad: qué hace 

class CuentaBancaria {

    //Atributos (identidad/estado)
    IBAN:string
    banco:number
    sucursal:number
    dc:number
    libreta:number

    //Funcionalidad
    //No se escribe la palabra reservada 'function'
    toString():string{
        return this.IBAN+this.banco+this.sucursal+this.dc+this.libreta
    }
} 

//una vez que hemos creado una clase tenemos un nuevo tipo en la ciudad:
let cb1:CuentaBancaria = new CuentaBancaria() 
cb1.IBAN = "ES01"
cb1.banco = 1234
cb1.sucursal = 5678
cb1.dc = 90
cb1.libreta = 1234567890
//cb1.tocoto = "ARSA"
console.log(cb1)
console.log(cb1.toString())

//
//Constructores
//
//En Typescript nos permiten un constructor (y solo uno)
//No hay sobrecarga de constructores
//

class Libro {
    titulo:string
    autor :string
    ISBN  :string

    //El constructor es una función especial y se indica con
    //la palabra reservada 'constructor'
    //El constructor recibe una serie de parámetros que servirán para inicializar el
    //objeto
    constructor(titulo:string=null, autor:string=null, ISBN:string=null){
        //Debemos asignar los valores recibidos a los atributos correspondientes
        this.titulo = titulo
        this.autor  = autor
        this.ISBN   = ISBN
    }
}

//
let l1:Libro = new Libro("El corazón de las tinieblas","Joseph Conrad","1234")
console.log(l1)
//Si quisieramos crear un libro pero todavía no tuvieramos los valores podríamos
//hacer esto...
let l2:Libro = new Libro(null,null,null) 
//Pero es feísimo. Podemos indicar valores por defecto para los parámetros
//constructor(titulo:string=null, autor:string=null, ISBN:string=null){ ... }
//del constructor y así simulamos tener dos:
//-un constructor con lodos los valores
//-un constructor sin parámetros
let l3:Libro = new Libro()
//Si quisieramos crear un libro y solo tuvieramos el ISBN no tenemos más remedio que
//hacerlo así:
let l4:Libro = new Libro(null,null,"5678")

//
//TypeScript tiene un atajo estupendísimo para definir clases y constructores
//

class Empleado{

    //public nombre:string

    //Los parámetros del constructor que tienen modificador de acceso
    //se convierten en atributos de la clase cuyo valor será
    //el recibido
    //
    //Además en typescript (y acabo de leer que en ecmascript7 tambien aunque voy a fingir
    //que ya lo sabía) los parametros de las funciones pueden tener un valor por defecto
    public constructor(public nombre   :string  = '',
                       public direccion:string  = '',
                       public telefono :string  = '',
                       public activo   :boolean = false,
                       public dni      :string  = ''){
        //this.nombre = nombre
    }
}

let empleado1:Empleado = new Empleado("Bart","C/Evergreen Terrace","555",true,"123456")
let empleado2:Empleado = new Empleado(null,null,null,null,null) //Horrible!
let empleado3:Empleado = new Empleado() //!Horrible




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
    public    dato1:number //El atributo es accesible desde el exterior del objeto
    protected dato2:number //El atributo es accesible desde las clases que hereden e invisible desde el exterior del objeto
    private   dato3:number //El atributo no es visible
    //Si no indicamos el modificador de acceso se toma como 'public'
    dato4:number
}

let prueba1:Prueba = new Prueba()
prueba1.dato1 = 123 //
prueba1.dato4 = 456 //Los dos son visibles
//p1.dato3 = 789 //No transpila: el atributo no es accesible desde el exterior del objeto


///////////////////////////////////////////////////////////////////////////

class Direccion {
    ciudad:string
    calle:string
    numero:string
    constructor(ciudad:string, calle:string, numero:string){
        this.ciudad = ciudad
        this.calle = calle
        this.numero = numero
    }
}

class Cliente {
    _id:string
    nombre:string
    direcciones:Direccion[] = []
    telefono:string

    constructor(_id:string,nombre:string,direccion:Direccion,telefono:string){
        this._id = _id
        this.nombre = nombre
        this.direcciones.push(direccion)
        this.telefono = telefono 
    }
}

class Producto {
    _id:string
    nombre:string
    descripcion:string
    afoto:string
    //Colocamos aqui el precio de catálogo como una simplificación
    precio:number 
    constructor(_id:string, nombre:string, descripcion:string, afoto:string, precio:number){
        this._id = _id
        this.nombre = nombre
        this.descripcion = descripcion
        this.afoto = afoto
        this.precio = precio
    }
}

class DetallePedido {
    producto:Producto
    precio:number
    cantidad:number
    descuento:number
    constructor(producto:Producto, precio:number, cantidad:number, descuento:number){
        this.producto = producto
        this.precio = precio
        this.cantidad = cantidad
        this.descuento = descuento
    }
}

class Pedido {
    public _id:string
    public codigo:string
    public fecha:string
    public cliente:Cliente 
    private detalles:DetallePedido[]
    private total:number

    constructor(_id:string, codigo:string, fecha:string, cliente:Cliente){
        this._id = _id
        this.codigo = codigo
        this.fecha = fecha
        this.cliente = cliente
        this.detalles = []
        this.total = 0
    }

    public addDetalle(detalle:DetallePedido):void{
        //recorrer el array de detalles para ver si ya hay uno que tenga el producto
        //si existe se suman las cantidades
        //si no se añade el detalle:
        this.detalles.push(detalle) 
        this.calcularTotal()
    }

    public calcularTotal():void{
        //recalcular el total
        let aux:number = 0
        for(let dp of this.detalles){
            aux = aux + ( dp.cantidad * dp.precio )
        }
        this.total = aux
    }

    //Métodos accesores
    //Se utilizan cuando algun atributo del objeto es privado y queremos proporcionar
    //un acceso controlado al mismo

    public getTotal():number{
        return this.total
    }

    public getDetalles():DetallePedido[]{
        //Aqui deberíamos devolver una copia para que nadie trastee con este array
        return this.detalles
    }

}


let direccion:Direccion = new Direccion("Escondido, CA","C/Falsa","123")
let cliente:Cliente = new Cliente(null, "John Lewis",direccion,"555")
let pedido:Pedido = new Pedido(null,"PED-0","HOY",cliente)

console.log("===================================")
console.log(pedido)

let p1 = new Producto("123","Chintáfono","...","afoto",10)
let detalle1 = new DetallePedido(p1,10,10,0)
let p2 = new Producto("456","Imán de buscar voltios","...","afoto",20)
let detalle2 = new DetallePedido(p2,10,20,0)

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

pedido.addDetalle(detalle1)
pedido.addDetalle(detalle2)
console.log(pedido)

console.log("===================================")
//console.log(pedido.total)
//console.log(pedido.detalles)
console.log(pedido.getTotal())
console.log(pedido.getDetalles())



///////////////////////////////////////////////////////////////////////////
//Las clases de antes pero con el constructor 'atajo'
///////////////////////////////////////////////////////////////////////////

class Direccion_ {
    constructor(public ciudad:string=null, 
                public calle:string=null, 
                public numero:string=null){
    }
}

class Cliente_ {

    direcciones:Direccion_[] = []

    constructor(public _id:string=null,
                public nombre:string=null,
                direccion:Direccion_=null, //Este no lleva public porque no es un atributo. El atributo es un array de direcciones
                public telefono:string=null){
        if(direccion){
            this.direcciones.push(direccion)
        }
    }
}

class Producto_ {
    constructor(public _id:string=null, 
                public nombre:string=null, 
                public descripcion:string=null, 
                public afoto:string=null, 
                public precio:number=null){
    }
}

class DetallePedido_ {
    constructor(public producto:Producto_=null, 
                public precio:number=null,
                public cantidad:number=null, 
                public descuento:number=null){
    }
}

class Pedido_ {
    private detalles:DetallePedido_[]
    private total:number

    constructor(public _id:string=null, 
                public codigo:string=null, 
                public fecha:string=null,
                public cliente:Cliente=null){
        this.detalles = []
        this.total = 0
    }

    public addDetalle(detalle:DetallePedido_):void{
        //recorrer el array de detalles para ver si ya hay uno que tenga el producto
        //si existe se suman las cantidades
        //si no se añade el detalle:
        this.detalles.push(detalle) 
        this.calcularTotal()
    }

    public calcularTotal():void{
        //recalcular el total
        let aux:number = 0
        for(let dp of this.detalles){
            aux = aux + ( dp.cantidad * dp.precio )
        }
        this.total = aux
    }

    public getTotal():number{
        return this.total
    }

    public getDetalles():DetallePedido[]{
        //Aqui deberíamos devolver una copia para que nadie trastee con este array
        return this.detalles
    }

}




























