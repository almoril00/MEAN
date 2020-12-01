import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido';
import { Usuario } from 'src/app/entidades/usuario';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public pedidos:Pedido[] = [] 

  constructor(private pedidosService:PedidosService,
              private sessionService:SessionService,
              private router:Router) {

    let usuario:Usuario = sessionService.getItem("usuario")
    pedidosService
      .listarPedidos(usuario._id)
      .subscribe(
        pedidos => this.pedidos = pedidos,
        error => console.log(error)
      )

  }

  ngOnInit(): void {
  }

  //PAra que recibir el id del pedido y buscarlo en el array 
  //si nos pueden pasar el pedido entero
  public reutilizarCesta(pedido:Pedido):void{
    console.log(pedido)

    //Cuidadín! el pedido ha sido creado a partir de un JSON y no tiene 
    //las funciones!
    Object.setPrototypeOf(pedido, Pedido.prototype)
    this.sessionService.setItem("cesta", pedido)

    this.router.navigateByUrl("/tienda/cesta")
  }


}
