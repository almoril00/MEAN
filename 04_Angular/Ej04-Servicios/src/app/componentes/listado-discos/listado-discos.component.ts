import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/entidades/disco';
import { DiscosService } from 'src/app/servicios/discos.service';

@Component({
  selector: 'app-listado-discos',
  templateUrl: './listado-discos.component.html',
  styleUrls: ['./listado-discos.component.css'],
  providers: [ ]
})
export class ListadoDiscosComponent implements OnInit {

  public discos:Disco[] //Undefined

  //Inyección de dependencias en Angular
  //Si el constructor de un componente (o un servicio) recibe parámetros Angular intentará proporcionarlos
  //Hay una lista concreta de cosas que podemos pedir
  //y si no incamos el tipo angular no sabrá qué pedimos
  //-Router: objeto que sirve para 'navegar'
  //-ActivatedRoute: objeto que representa la ruta que hay ahora mismo en la barra de navegacion
  //-HttpClient: objeto que sirve para enviar peticiones AJAX
  //-Otros componentes presentes en la pagina
  //-SERVICIOS
  //-...

  //(  (  |
  public constructor(private discosService:DiscosService) { 
    console.log("Constructor de ListadoDiscosComponent")
    this.discos = discosService.listar()
  }
  
  public borrar():void{
    this.discosService.insertar(null)
  }
  
  ngOnInit(): void {
    console.log("ngOnInit de ListadoDiscosComponent")
  }

}
