import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public productos:Producto[] //Undefined

  constructor(private productosService:ProductosService) { 
    this.listarProductos()
  }

  ngOnInit(): void {
  }

  public listarProductos():void{
    this
      .productosService
      .listarProductos()
      .subscribe(
        productos => this.productos = productos,
        error => {
          console.log(error)
        }
      )
  }

}
