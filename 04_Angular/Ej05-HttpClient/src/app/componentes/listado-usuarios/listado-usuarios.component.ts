import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  //Un componente JAMAS utilizará el objeto HttpClient
  constructor(private httpClient:HttpClient) { 

    this.listarUsuarios()

  }

  ngOnInit(): void {
  }

  private listarUsuarios():void{

    this
      .httpClient
      .get("https://reqres.in/api/users/87?delay=1")
      .subscribe(
        function(data) { console.log(data) },
        function(error) { console.log(error) }
      )

  }


}
