import { Component, OnInit } from '@angular/core';
import { CBProducto } from 'src/app/entidades/CBProducto';
import { Producto } from 'src/app/entidades/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public criterio:CBProducto = new CBProducto()
  public productos:Producto[] //Undefined

  constructor(private productosService:ProductosService) { 
    this.listarProductos()
  }

  ngOnInit(): void {
  }

  public listarProductos():void{
    this
      .productosService
      .listarProductos(this.criterio)
      .subscribe(
        productos => this.productos = productos,
        error => {
          console.log(error)
          console.log(error.error.mensaje)
        }
      )
  }

  public vaciarCriterio():void{
    this.criterio = new CBProducto()
  }

}
