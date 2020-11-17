import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/servicios/session.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-aceptacion-terminos',
  templateUrl: './aceptacion-terminos.component.html',
  styleUrls: ['./aceptacion-terminos.component.css']
})
export class AceptacionTerminosComponent implements OnInit {

  public acepta:boolean = false
  public mensaje:string = ""

  constructor(private sessionService:SessionService,
              private usuariosService:UsuariosService,
              private router:Router) { 
  }

  ngOnInit(): void {
  }

  public registrar(){

    if(!this.acepta){
      this.mensaje = "Debe aceptar los terminos"
      return
    }

    let usuarioARegistrar = this.sessionService.getItem("usuario")

    this
      .usuariosService
      .registrarUsuario(usuarioARegistrar)
      .subscribe(
        //function(data){ console.log(data) }
        data => this.router.navigateByUrl("/"),
        error => this.mensaje = "DATOS INCORRECTOS"
      )
  }
}
