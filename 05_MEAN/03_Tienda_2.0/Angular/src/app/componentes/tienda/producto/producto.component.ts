import { Component, Input, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { Producto } from 'src/app/entidades/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  //ProductoComponent recibe el producto que ha de mostrar a través de su selector
  //Para indicarlo marcamos la propiedad con el selector '@Input()'
  @Input()
  public producto:Producto

  constructor(private sessionService:SessionService) { 
  }

  ngOnInit(): void {
  }

  public comprar():void {

      let cesta:Pedido = this.sessionService.getItem("cesta")
      let detalle:DetallePedido = new DetallePedido(1,this.producto.precio,0,this.producto)
      cesta.addDetalle(detalle)

  }


}
