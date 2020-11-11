import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
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
              private router:Router) { 
    //Inicializar en constructor las propiedades del componene es más ortodoxo 
    this.usuario = new Usuario()
  }

  ngOnInit(): void {
  }

  public entrar():void{

    if(!this.usuario.login || !this.usuario.pw){
      this.mensaje = "IMBECIL"
      return
    }    

    this
      .autenticacionService
      .getToken(this.usuario)
      .subscribe(
        respuesta => {
          this.sessionService.setItem("JWT", respuesta.JWT)
          this.sessionService.setItem("usuario",respuesta.usuario)
          this.router.navigateByUrl("/tienda/catalogo")
        },
        (error) => this.mensaje = "Credenciales incorrectas"
      )

    }

}
