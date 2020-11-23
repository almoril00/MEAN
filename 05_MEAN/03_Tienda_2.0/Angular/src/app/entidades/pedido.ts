import { DetallePedido } from './detallePedido';
import { Usuario } from './usuario';

export class Pedido {

    public constructor(
        public _id        : string  = null,
        //Composición de objetos
        public usuario    : Usuario = null,
        public fecha      : string  = null,
        public formaPago  : string  = null,
        public dirEntrega : string  = null,
        public estado     : string  = null,
        public total      : number  = null,
        private detalles  : DetallePedido[] = []){
    }

    //
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

    public calcularTotal(){
        //
        //
        //
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











