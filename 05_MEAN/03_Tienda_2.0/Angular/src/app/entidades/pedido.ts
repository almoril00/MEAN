import { DetallePedido } from './detallePedido';
import { Usuario } from './usuario';

export class Pedido {

    public constructor(
        public _id          : string  = null,
        //Composición de objetos
        public usuario      : Usuario = null,
        public fechaEntrega : string  = null,
        public formaPago    : string  = null,
        public dirEntrega   : string  = null,
        public estado       : string  = null,
        public total        : number  = null,
        private detalles    : DetallePedido[] = []){
    }

    //Añade un detalle al pedido
    //Si el pedido cuenta ya con un detalle que incñuye el producto recibido los suma
    public addDetalle(nuevoDetalle:DetallePedido){
        
        let encontrado:boolean = false
        for(let dp of this.detalles){
            if(dp.producto._id == nuevoDetalle.producto._id){
                //dp.cantidad = dp.cantidad + nuevoDetalle.cantidad
                dp.cantidad += nuevoDetalle.cantidad
                encontrado = true
                break
            }
        }
               
        if(!encontrado){
            this.detalles.push(nuevoDetalle)
        }

        this.calcularTotal()
    }

    //Aumenta la cantidad del detalle que tiene el producto indicado en 1
    public aumentarCantidadDetalle(idProducto:string){
        for(let dp of this.detalles){
            if(dp.producto._id == idProducto){
                dp.cantidad++
                break
            }
        }
        this.calcularTotal()
    }

    //Disminuye la cantidad del detalle que tiene el producto indicado en 1
    //La cantidad nunca llegará a 0
    public reducirCantidadDetalle(idProducto:string){
        for(let dp of this.detalles){
            if(dp.producto._id == idProducto && dp.cantidad>1){
                dp.cantidad--
                break
            }
        }
        this.calcularTotal()        
    }

    //Elimina el detalle que contiene el producto indicado
    public eliminarDetalle(idProducto:string){
        for(let a=0; a<this.detalles.length; a++){
            let dp = this.detalles[a]
            if(dp.producto._id == idProducto){
                this.detalles.splice(a,1)
                break
            }
        }
        this.calcularTotal()
    }

    public eliminarDetalles(){
        this.detalles = []
        this.calcularTotal()
    }

    public calcularTotal(){
        let total:number = 0
        for(let dp of this.detalles){
            total += dp.cantidad*dp.precio
        }
        this.total = total
    }

    public getDetalles():DetallePedido[]{
        //Aqui devolveremos una copia del array para no hacer el canelo
        return this.detalles
    }

}


/*

Cod: PED-17
Fecha: 19/11/2020
Cliente: Venancia

------------------------------------
PROD   DESC            CANT   PRECIO

p1     movida             6       10
p2     movidón            6       10
p3     movidote           6       10

*/











