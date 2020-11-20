import { Component, Input, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { Producto } from 'src/app/entidades/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-detallePedido',
  templateUrl: './detallePedido.component.html',
  styleUrls: ['./detallePedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  @Input()
  public detalle:DetallePedido

  constructor() { 
  }

  ngOnInit(): void {
  }

}
