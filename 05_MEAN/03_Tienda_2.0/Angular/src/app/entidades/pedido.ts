import { totalmem } from 'os';
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
        private detalles  : DetallePedido[] = null){
    }

    public addDetalle(detalle:DetallePedido){
        this.detalles.push(detalle)
        //
        //
        //
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

p1     cfkjshjksdh        6       10
p2     cfkjshjksdh        6       10
p3     cfkjshjksdh        6       10

*/









