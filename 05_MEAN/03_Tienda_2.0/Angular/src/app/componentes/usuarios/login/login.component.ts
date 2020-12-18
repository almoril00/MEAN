import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido';
import { Usuario } from 'src/app/entidades/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensaje:string = ""

  //Esto no estaría del todo mal
  //public login:string
  //public pw:string

  //Pero esto es más mejor del mundo mundial
  public usuario:Usuario /*= new Usuario()*/

  constructor(private autenticacionService:AutenticacionService,
              private sessionService:SessionService,
              private pedidosService:PedidosService,
              private router:Router) { 
    //Inicializar en constructor las propiedades del componene es más ortodoxo 
    this.usuario = new Usuario()
  }

  ngOnInit(): void {
  }

  public entrar():void{

    if(!this.usuario.login || !this.usuario.pw){
      this.mensaje = "Por favor: escribe algo..."
      return
    }    

    this
      .autenticacionService
      .getToken(this.usuario)
      .subscribe(
        respuesta => {
          this.sessionService.setItem("JWT", respuesta.JWT)

          console.log("JWT",respuesta.JWT)

          let cargamento:any = JSON.parse(atob(respuesta.JWT.split(".")[1]))

          console.log("====================================")
          console.log(cargamento)
          let horaServidor  = cargamento.iat 
          //10:00:00
          let horaExpiracion = cargamento.exp
          //11:00:00
          let horaNavegador = Math.floor(Date.now()/1000)
          //13:00:00
          let diferenciaHora = horaServidor-horaNavegador
          //10800
          let horaExpiracionJWT = horaExpiracion+diferenciaHora
          //14:00:00

          this.sessionService.setItem("horaExpiracionJWT", horaExpiracionJWT)
          this.sessionService.setItem("usuario",respuesta.usuario)

          //Si descrubrimos que inicializar la tienda es algo más que esta simple 
          //línea nos lo llevariamos a otra parte          
          //let cesta:Pedido = new Pedido()
          //cesta.usuario = respuesta.usuario
          //this.sessionService.setItem("cesta", cesta)

          //Lo hemos descubierto...
          this.pedidosService.crearCesta()

          this.router.navigateByUrl("/tienda/catalogo")
        },
        (error) => this.mensaje = "Credenciales incorrectas"
      )

    }

}
