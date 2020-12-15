import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario
  public mensaje:String = ""

  constructor(private router:Router,
              private autenticationService:AutenticacionService) { 
    this.usuario = new Usuario()
  }

  ngOnInit(): void {
  }

  public confirmar():void{

    //Validaciones...
    //...    

    this
      .autenticationService
      .registrarUsuario(this.usuario)
      .then( () => {
        this.router.navigateByUrl("/aplicacion")
      })
      .catch( e => {
        this.mensaje = "No se pudo completar el registro"
      })
  }

}
