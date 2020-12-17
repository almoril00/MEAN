import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/entidades/tarea';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-listado-tareas-usr',
  templateUrl: './listado-tareas-usr.component.html'
})
export class ListadoTareasUsrComponent implements OnInit {

  public tareas:Tarea[]
  public nuevoEstado:string
      
  constructor(private tareasService:TareasService) {
    this.listarTareas()
  }
  
  ngOnInit(): void {
  }

  public async listarTareas() {
    try {
      this.tareas = await this.tareasService.listarTareas()
    } catch (error) {
      console.log("ZASCA!")
    }
  }

  public modificarEstado(tarea:Tarea):void{
    console.log(tarea)
    console.log("estado-"+tarea._id)

    //Nos devuelven un HTMLElement, que es una clase genérica que representa cualquier tipo de nodo DOM
    let nodo:HTMLElement = document.getElementById("estado-"+tarea._id)
    //Podemos hacer un cast y decogerlo en una nueva variable más específica
    let desplegable:HTMLInputElement = <HTMLInputElement> nodo
    //HTMLInputElement si que tiene la propiedad value
    let nuevoEstado:string = desplegable.value

    this.tareasService.modificarEstadoTarea(tarea._id, nuevoEstado)
    .then( () => {
      this.listarTareas()
    })
    .catch( (e) => { console.log(e)} )

  }

}




