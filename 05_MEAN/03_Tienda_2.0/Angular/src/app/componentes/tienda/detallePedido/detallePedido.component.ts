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
  //@Input() 
  private cesta:Pedido

  constructor(private sessionService:SessionService) { 
    this.cesta = sessionService.getItem("cesta")
  }

  ngOnInit(): void {
  }

  public aumentarCantidad():void{
    this.cesta.aumentarCantidadDetalle(this.detalle.producto._id)
  }
  
  public disminuirCantidad():void{
    this.cesta.reducirCantidadDetalle(this.detalle.producto._id)
  }

  public borrarDetalle():void{
    this.cesta.eliminarDetalle(this.detalle.producto._id)
  }

}
