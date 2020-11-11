import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { ServicioSeguridad } from 'src/app/servicios/servicioSeguridad';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario:Usuario = new Usuario()

  constructor() {
   
  }

  ngOnInit() {
  }


}
