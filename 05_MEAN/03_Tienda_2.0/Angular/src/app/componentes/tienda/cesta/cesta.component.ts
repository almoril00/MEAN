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

}
