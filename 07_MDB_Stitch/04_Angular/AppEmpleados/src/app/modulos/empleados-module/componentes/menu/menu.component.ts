import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public usuario:Usuario

  constructor(private router:Router,
              private autenticacionService:AutenticacionService) { 
    this.usuario = autenticacionService.getUser()
  }

  ngOnInit(): void {
  }

  public logout():void{
   
    this.autenticacionService.logOut()
    .then( () => {
      this.router.navigate(["/usuarios/login"])
      //this.router.navigateByUrl("/usuarios/login")
    })
    .catch( e => console.log(e))
  }

}
