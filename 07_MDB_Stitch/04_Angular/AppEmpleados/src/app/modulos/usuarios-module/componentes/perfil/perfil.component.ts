import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  public mensaje:string
  public usuario:Usuario

  constructor(private autenticacionService:AutenticacionService) {
    this.usuario = autenticacionService.getUser()
  }

  ngOnInit() {
  }

  public guardar():void{

  }

  public baja():void{

  }

}

