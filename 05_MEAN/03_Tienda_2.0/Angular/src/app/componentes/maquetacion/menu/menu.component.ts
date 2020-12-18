import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public usuario:Usuario

  constructor(private sessionService:SessionService) { 
    this.usuario = sessionService.getItem("usuario")
  }

  ngOnInit(): void {
  }

}
