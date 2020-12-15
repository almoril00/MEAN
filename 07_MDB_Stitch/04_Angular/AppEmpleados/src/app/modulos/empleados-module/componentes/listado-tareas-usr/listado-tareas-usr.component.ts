import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/entidades/tarea';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-listado-tareas-usr',
  templateUrl: './listado-tareas-usr.component.html'
})
export class ListadoTareasUsrComponent implements OnInit {

  public tareas:Tarea[]
      
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

}
