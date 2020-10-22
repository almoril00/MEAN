import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  //Inicializamos el array para que tenga algo mientras llega la respuesta a la petición AJAX
  //si no fallará el *ngIf que tenemos en la tabla
  public users:any[] = []

  //Un componente JAMAS utilizará el objeto HttpClient
  constructor(private httpClient:HttpClient) { 

    this.listarUsuarios()

  }

  ngOnInit(): void {
  }

  private listarUsuarios():void{

    //INSISTIMOS: Un componente jamás debería usar el objeto HttpClient

    //Las funciones de HttpClient son asíncronas y devuelven un observable
    //al que debemos subscribirnos
    /*
    let observable:Observable<any> = this
      .httpClient
      .get("https://reqres.in/api/users?delay=1")
    observable.subscribe(
        function(data) { console.log(data) },
        function(error) { console.log(error) }
      )
    */

    /*
    let that = this
    this
      .httpClient
      .get("https://reqres.in/api/users?delay=5")
      .subscribe(
        //Esta funcion es un 
        function(data:any) { 
          that.users = data.data
        },
        function(error) { console.log(error) }
      )
    */  

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