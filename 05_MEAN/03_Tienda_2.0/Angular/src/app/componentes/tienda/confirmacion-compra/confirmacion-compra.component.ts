import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-confirmacion-compra',
  templateUrl: './confirmacion-compra.component.html',
  styleUrls: ['./confirmacion-compra.component.css']
})
export class ConfirmacionCompraComponent implements OnInit {

  public cesta:Pedido

  constructor(private sessionService:SessionService) { 
    this.cesta = sessionService.getItem("cesta")
    
    //Arovechamos este momento para añadirle a la cesta el usuario
    if(!this.cesta.usuario){
      this.cesta.usuario = sessionService.getItem("usuario")
      //Si la cesta no tiene direccion le ponemos la del usuario como valor inicial
      this.cesta.dirEntrega = this.cesta.usuario.direccion
    }

  }

  ngOnInit(): void {
  }

}
