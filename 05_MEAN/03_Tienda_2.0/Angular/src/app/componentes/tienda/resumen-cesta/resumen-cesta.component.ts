import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { SessionService } from 'src/app/servicios/session.service';
import { DetallePedidoComponent } from '../detallePedido/detallePedido.component';
@Component({
  selector: 'app-resumen-cesta',
  templateUrl: './resumen-cesta.component.html',
  styleUrls: ['./resumen-cesta.component.css']
})
export class ResumenCestaComponent implements OnInit {

  public cesta:Pedido

  constructor(private sessionService:SessionService) { 
    this.cesta = sessionService.getItem("cesta")
  }

  ngOnInit(): void {
  }

}
