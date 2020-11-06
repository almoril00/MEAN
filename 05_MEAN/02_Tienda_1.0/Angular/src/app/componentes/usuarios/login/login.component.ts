import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Esto no estaría del todo mal
  //public login:string
  //public pw:string

  //PEro esto es más mejor del mundo mundial
  public usuario:Usuario /*= new Usuario()*/

  constructor() { 
    //Inicializar en constructor las propiedades del componene es más ortodoxo 
    this.usuario = new Usuario()
  }

  ngOnInit(): void {
  }

  public entrar():void{

    //coger el login y el pw
    //llamar a un servicio!
    console.log("ENTRAR::::"+this.usuario.login+", "+this.usuario.pw)

  }

}
