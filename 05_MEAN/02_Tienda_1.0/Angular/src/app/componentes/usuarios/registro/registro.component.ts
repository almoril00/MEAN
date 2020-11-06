import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  public confirmacionPw:string

  constructor() { }

  ngOnInit(): void {
  }

  public siguiente():void{
    console.log("SIGUIENTE")

    //Validar...
    //llamar al servicio
  }

}
