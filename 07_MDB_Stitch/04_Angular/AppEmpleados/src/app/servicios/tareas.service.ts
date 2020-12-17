import { Injectable } from '@angular/core';
import { Tarea } from '../entidades/tarea';
import { AutenticacionService } from './autenticacion.service';
import { RealmService } from './realm.service';

@Injectable( { providedIn : 'root' })
export class TareasService {

    public constructor(private realmService:RealmService,
                       private autenticacionService:AutenticacionService){
    }

    public listarTareas():any{
        return new Promise( async (resolve, reject) => {
            try {
                let tareas = await this
                    .realmService
                    .getEsquema()
                    .collection("tareas")
                    .find( ) //{ idUsuario : this.autenticacionService.getUser().idUsuario })
                resolve(tareas)
            } catch(error){
                console.log(error)
                reject(error)
            }
        })
    }
    
    public insertarTarea(tarea:Tarea):any{        
        return new Promise( async (resolve, reject) => {
            //El _id de la tarea se decide en el servidor
            delete tarea._id
            try{
                let rs = await this.realmService.getEsquema().collection("tareas").insertOne(tarea)
                resolve(rs)
            } catch(error) {
                console.log(error)
                reject(error)
            }
        })
    }


    /////////////////////////////////////////////////////////
    //Funcion en REALM:
    //FUNCION ES EJECUTADA CON PERMISOS DE SISTEMA
    /*
    {
        "id": "5fdb941b7ee3281e85308767",
        "name": "modificarEstadoTarea",
        "private": false,
        "run_as_system": true
    }

    exports = function(idTarea, nuevoEstado){
        return new Promise( async (resolve, reject) => {
            let esquema = context
            .services
            .get("mongodb-atlas")
            .db("esquema_tareas")
            let coleccionTareas = esquema.collection("tareas")
            let tarea = await coleccionTareas.findOne( { _id : idTarea })
            //Con la condicion del updateOne esta query sería innecesaria:
            if( tarea.usuario.idUsuario != context.user.id){
                reject("Solo puede modificar el estado de sus tareas, HDLGP")
                return
            }
            let rs = await coleccionTareas
            .updateOne( { "_id" : idTarea, "usuario.idUsuario" : context.user.id }, { $set : { estado : nuevoEstado }})
            resolve("OK")
        })
    };
    */
    /////////////////////////////////////////////////////////
      
    public modificarEstadoTarea(idTarea:string, nuevoEstado:string){

        return new Promise( async (resolve, reject) => {

            //Los usuarios EMPLEADO no tienen permiso para modificar las tareas
            //Esta query devuelve un 403!
            //let rs = await this
            //    .realmService
            //    .getEsquema()
            //    .collection("tareas")
            //    .updateOne( { _id : idTarea }, { $set : { estado : nuevoEstado }})
            //resolve(rs)

            this.realmService.getApp().currentUser.functions.modificarEstadoTarea(idTarea, nuevoEstado)
            .then( rs => {
                console.log(rs)
                resolve(rs)
            })
            .catch( e => {
                console.log(e)
                reject(e)
            })
        })
    }

}