import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/entidades/tarea';
import { Usuario } from 'src/app/entidades/usuario';
import { EmpleadosService } from 'src/app/servicios/empleados.service';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-tareas-admin',
  templateUrl: './tareas-admin.component.html'
})
export class TareasAdminComponent implements OnInit {

  public tarea:Tarea
  public tareas:Tarea[]
  public empleados:Usuario[] //Aqui sólo tendremos usuarios con rol 'EMPLEADO'

  public constructor(private empleadosService:EmpleadosService,
                     private tareasService:TareasService) { 
    
    this.tarea = new Tarea()
    this
      .empleadosService
      .listarEmpleados()
      .then( empleados => this.empleados = empleados)
      .catch( error => console.log(error))

  }

  ngOnInit(): void {
  }

  public insertar():void{
  }

  public modificar():void{
  }

  public borrar():void{
  }
  
  public vaciar():void{
  }

}
