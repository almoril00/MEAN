import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { SessionService } from 'src/app/servicios/session.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public mensaje:string

  public estiloLogin:string //ESTO QUE ES????

  public usuario:Usuario

  constructor(private sessionService:SessionService,
              private usuariosService:UsuariosService) {
    this.usuario = sessionService.getItem("usuario")
  }

  ngOnInit() {
  }

  public guardar():void{

    this
      .usuariosService
      .modificarUsuario(this.usuario)
      .subscribe(
        respuesta => {},
        error => { console.log(error) }
      )

  }

  public baja():void{

  }

}
