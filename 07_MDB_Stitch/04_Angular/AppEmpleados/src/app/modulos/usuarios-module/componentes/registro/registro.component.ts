import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario
  public mensaje:String = ""

  constructor(private router:Router) { 
    this.usuario = new Usuario()
  }

  ngOnInit(): void {
  }

  public confirmar():void{


  }

}
