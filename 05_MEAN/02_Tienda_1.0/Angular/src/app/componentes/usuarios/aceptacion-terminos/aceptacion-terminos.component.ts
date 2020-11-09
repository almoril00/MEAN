import { Component, OnInit } from '@angular/core';
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
              private usuariosService:UsuariosService) { 
  }

  ngOnInit(): void {
  }

  public registrar(){
    console.log("REGISTRAR:")

    if(!this.acepta){
      this.mensaje = "Debe aceptar los terminos"
      return
    }

    let usuarioARegistrar = this.sessionService.getItem("usuario")
    console.log(usuarioARegistrar)

    this
      .usuariosService
      .registrarUsuario(usuarioARegistrar)
      .subscribe(
        //function(data){ console.log(data) }
        data => console.log(data),
        error => console.log(error)
      )
  }
}
