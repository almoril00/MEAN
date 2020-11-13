import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  public confirmacionPw:string
  public mensaje:String = ""

  constructor(private router:Router,
              private sessionService:SessionService) { 

    console.log("Creando RegistroComponent")

    //Podemos usar el sessionStorage
    /*
    let usrJSON = sessionStorage.getItem("usuario")
    if(usrJSON){
      this.usuario = JSON.parse(usrJSON)
      sessionStorage.removeItem("usuario")
    }*/

    let usr = sessionService.getItem("usuario")
    if(usr){
      this.usuario = usr
      sessionService.removeItem("usuario")
    }

  }

  ngOnInit(): void {
  }

  public siguiente():void{

    if(this.usuario.pw==null || this.usuario.pw.trim().length<10){      
      this.mensaje = "El pasword debe contener al menos 10 caracteres"
      return
    }    

    if(this.usuario.pw != this.confirmacionPw){
      this.mensaje = "El password y la confirmación no coinciden"
      return
    }

    //Guardamos el usuario en el session storage antes de navegar
    //sessionStorage.setItem("usuario",JSON.stringify(this.usuario))

    //Antes de navegar guardamos el usuario en el sessionService
    this.sessionService.setItem("usuario", this.usuario)

    //this.router.navigate(['/usuarios/aceptacion'])
    this.router.navigateByUrl('/usuarios/aceptacion') 

  }

}
