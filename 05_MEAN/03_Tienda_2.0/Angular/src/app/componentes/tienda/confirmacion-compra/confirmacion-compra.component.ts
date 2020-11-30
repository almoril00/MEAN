import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-confirmacion-compra',
  templateUrl: './confirmacion-compra.component.html',
  styleUrls: ['./confirmacion-compra.component.css']
})
export class ConfirmacionCompraComponent implements OnInit {

  public cesta:Pedido

  constructor(private sessionService:SessionService,
              private pedidosService:PedidosService) { 
    this.cesta = sessionService.getItem("cesta")
    
    //Si la cesta no tiene direccion le ponemos la del usuario como valor inicial
    if(!this.cesta.dirEntrega){
      this.cesta.dirEntrega = this.cesta.usuario.direccion
    }

  }

  ngOnInit(): void {
  }

  public confirmarCompra(){

    console.log("========================")
    this
      .pedidosService
      .aceptarPedido(this.cesta)
      .then( factura => {
        console.log(factura) 
        //Mensaje avisando de que la compra se ha efecturado
        //ó
        //Cambiar la vista al listado de facturas
        //
        //crear una nueva cesta para que sigan comprando y nos hagan millonarios
        this.pedidosService.crearCesta()
      })
      .catch( error => console.log(error) )

  }

}


