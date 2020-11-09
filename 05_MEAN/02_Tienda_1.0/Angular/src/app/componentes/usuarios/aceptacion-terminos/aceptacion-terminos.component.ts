import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-aceptacion-terminos',
  templateUrl: './aceptacion-terminos.component.html',
  styleUrls: ['./aceptacion-terminos.component.css']
})
export class AceptacionTerminosComponent implements OnInit {

  public acepta:boolean = false
  public mensaje:string = ""

  constructor(private sessionService:SessionService) { 
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

    //llamar al servicio para que envíe la peticion AJAX al servidor
    //Si todo ha ido bien navegar a login
    //Si ha habido un fallo mostrarlo

    



  }

}
