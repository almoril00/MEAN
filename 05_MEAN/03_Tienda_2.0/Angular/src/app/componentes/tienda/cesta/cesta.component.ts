import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  public cesta:Pedido

  constructor(private sessionService:SessionService) { 
    sessionService.saludar()
    this.cesta = sessionService.getItem("cesta")
  }

  ngOnInit(): void {
  }

  //comprar

  public vaciarCesta():void{
    //Le podemos pedir a la cesta, que está guardada en el sessionService, que elimine sus detalles
    this.cesta.eliminarDetalles()

    //Tambien podemos directamente sustituir la cesta que hay en el sessionService por un pedido nuevo
    //this.sessionService.setItem("cesta", new Pedido())
    //this.cesta = this.sessionService.getItem("cesta")
  }

}
