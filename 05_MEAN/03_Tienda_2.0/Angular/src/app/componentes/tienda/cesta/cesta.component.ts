import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/detallePedido';
import { Pedido } from 'src/app/entidades/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  public cesta:Pedido

  constructor(private sessionService:SessionService,
              private pedidosService:PedidosService) { 
    sessionService.saludar()
    this.cesta = sessionService.getItem("cesta")
  }

  ngOnInit(): void {
  }

  //comprar

  public vaciarCesta():void{
    //Le podemos pedir a la cesta, que está guardada en el sessionService, que elimine sus detalles
    //this.cesta.eliminarDetalles()

    //Tambien podemos directamente sustituir la cesta que hay en el sessionService por un pedido nuevo
    //Hacemos esto para que sea un nuevo pedido sin _id y si se pulsa guardar
    //que se inserte en vez de modificarse    
    this.sessionService.setItem("cesta", new Pedido())
    this.cesta = this.sessionService.getItem("cesta")
  }

  //
  public guardar():void{

    console.log(this.cesta)

    //averiguar si hay que insertar o modificar
    if(!this.cesta._id){
      this.insertarPedido()
    } else {
      this.modificarPedido()
    }
  }

  private insertarPedido():void{
    this
      .pedidosService
      .insertarPedido(this.cesta)
      .subscribe(
        pedidoInsertado => {
          //Le colocamos a la cesta el id que le ha correspondido
          this.cesta._id = pedidoInsertado._id          
          //mensaje avisando al usuario
        },
        error => {
          console.log(error)
          //mensaje al usuario
        }
      )
  }

  private modificarPedido():void{
    this
      .pedidosService
      .modificarPedido(this.cesta)
      .subscribe(
        pedidoModificado => {
          //mensaje avisando al usuario
        },
        error => {
          console.log(error)
          //mensaje al usuario
        }
      )
  }

}
