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
    
    this.vaciar()
    this
      .empleadosService
      .listarEmpleados()
      .then( empleados => this.empleados = empleados)
      .catch( error => console.log(error))

    this.listarTareas()
  }

  ngOnInit(): void {
  }

  public async listarTareas(){
    
    console.log("A VER QUE PASA AQUI")
    try{
      this.tareas = await this.tareasService.listarTareas()
      console.log(this.tareas)
    } catch (error) {
      console.log("ZASCA!")
    }
  }

  public insertar():void{
    this
      .tareasService
      .insertarTarea(this.tarea)
      .then( rs => { 
        console.log(rs) 
        this.listarTareas()
        this.vaciar()
      })
      .catch( error => {})
  }

  public async modificar(){
    try{
      await this.tareasService.modificarTarea(this.tarea)
      this.listarTareas()
    } catch (error){
      console.log(error)
    }
  }

  public async borrar(){
    try{
      await this.tareasService.borrarTarea(this.tarea)
      this.listarTareas()
      this.vaciar()
    } catch (error){
      console.log(error)
    }    
  }

  public async seleccionar(idTarea:string){
    try {
      this.tarea = await this.tareasService.buscarTareaPorId(idTarea)
    } catch (error){
      console.log(error)
    }
  }

  public vaciar():void{
      this.tarea = new Tarea()
      this.tarea.idUsuario = "0"
  }

}
