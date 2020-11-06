import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  public confirmacionPw:string
  public mensaje:String = ""

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

  public siguiente():void{
    console.log("SIGUIENTE")

    if(this.usuario.pw==null || this.usuario.pw.trim().length<10){      
      this.mensaje = "El pasword debe contener al menos 10 caracteres"
      return
    }    

    if(this.usuario.pw != this.confirmacionPw){
      this.mensaje = "El password y la confirmación no coinciden"
      return
    }

    //this.router.navigate(['/usuarios/aceptacion'])
    this.router.navigateByUrl('/usuarios/aceptacion') 

  }

}
