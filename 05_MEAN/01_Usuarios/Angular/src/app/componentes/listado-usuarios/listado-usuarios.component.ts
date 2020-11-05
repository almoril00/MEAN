import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  
  public usuarios:Usuario[] = []

  constructor(private usuariosService:UsuariosService) { 
    this.listarUsuarios()
  }

  ngOnInit(): void {
  }

  public listarUsuarios():void{
    this
      .usuariosService
      .listarUsuarios()
      .subscribe(
        usuarios => this.usuarios = usuarios,
        error => console.log(error) 
      )  
  }
}

