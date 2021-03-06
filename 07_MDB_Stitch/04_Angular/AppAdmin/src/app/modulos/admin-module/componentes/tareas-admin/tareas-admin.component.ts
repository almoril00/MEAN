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

  public async insertar(){

    //en tarea tenemos idUsuario
    //pero no tenemos el nombre
    
    /*
    for(let usr of this.empleados){
      if(usr.idUsuario == this.tarea.idUsuario){
        this.tarea.nombreUsuario = usr.nombre
      }
    }
    */
    let usuario:Usuario = this.empleados.find( e => e.idUsuario==this.tarea.usuario.idUsuario )
    this.tarea.usuario.nombre = usuario.nombre

    try{
      let rs = await this
        .tareasService
        .insertarTarea(this.tarea)
      console.log(rs) 
      this.listarTareas()
      this.vaciar()
    } catch (error){
      console.log(error)
    }
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
      this.tarea.usuario = { idUsuario:"0", nombre:null }
  }

}
