import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/servicios/users.service';
import { User } from 'src/app/entidades/user';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  //Inicializamos el array para que tenga algo mientras llega la respuesta a la petición AJAX
  //si no fallará el *ngIf que tenemos en la tabla
  public users:User[] = []

  //Un componente JAMAS utilizará el objeto HttpClient
  //Lo9 que hará será invocar una función de un servicio que envíe la peticion AJAX por él
  constructor(/*private httpClient:HttpClient*/
              private usersService:UsersService) { 

    this.listarUsuarios()

  }

  ngOnInit(): void {
  }

  public listarUsuarios():void{

    //INSISTIMOS: Un componente jamás debería usar el objeto HttpClient

    //Las funciones de HttpClient son asíncronas y devuelven un observable
    //al que debemos subscribirnos
    /*
    let observable:Observable<any> = this
      .httpClient
      .get("https://reqres.in/api/users?delay=1")
    observable.subscribe(
        function(data) { 
          console.log(data) 
        },
        function(error) { 
          console.log(error) 
        }
      )
    */

    /*
    //Ñapa jocosa:
    let that = this
    this
      .httpClient
      .get("https://reqres.in/api/users?delay=5")
      .subscribe(
        //Esta funcion es un closure
        function(data:any) { 
          that.users = data.data
        },
        function(error) { 
          console.log(error) 
        }
      )
    */

    /*
    let that = this
    this
      .usersService
      .listarUsuarios()
      .subscribe(
        function(data:any) { 
          that.users = data.data
        },
        function(error) { 
          console.log(error) 
        }
      ) 
    */

    this
      .usersService
      .listarUsuarios()
      .subscribe(
        data => this.users = data.data,
        error => console.log(error) 
      )       

  }

}


/*

C L O S U R E
_ _ _ _ _ _ _


----------
    |    |
    O    |
         |
         |
         |
         |
         |
----------------      

*/         