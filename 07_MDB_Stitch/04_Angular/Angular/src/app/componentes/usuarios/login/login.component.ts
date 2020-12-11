import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { App, Credentials } from 'realm-web';
import { Usuario } from 'src/app/entidades/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public mensaje:string = ""

  //Esto no estaría del todo mal
  //public login:string
  //public pw:string

  //Pero esto es más mejor del mundo mundial
  public usuario:Usuario = new Usuario()

  constructor(private autenticationService:AutenticacionService,
              private router:Router) { 

    console.log("========================================")
    console.log(this.usuario)
    
  }
  
  public entrar():void{
    
    this.autenticationService.logIn(this.usuario.correoE,this.usuario.pw)
    .then( usuario => {
      console.log(usuario)
      //navegar
    })
    .catch( error => {
      console.log(error)
      this.mensaje = "Credenciales incorrectas"
    })

  }

}
