import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

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

  constructor() { 
  }

  ngOnInit(): void {
  }

}
