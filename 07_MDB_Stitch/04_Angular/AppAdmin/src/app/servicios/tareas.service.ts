import { Injectable } from '@angular/core';
import { Tarea } from '../entidades/tarea';
import { RealmService } from './realm.service';

@Injectable( { providedIn : 'root' })
export class TareasService {

    public constructor(private realmService:RealmService){
    }

    public listarTareas():any{
        return new Promise( async (resolve, reject) => {
            try {
                //Si en este find hubiera un filtro sería para paginar las tareas o buscarlas por algun criterio que
                //que le fuera util al administrador
                let tareas = await this.realmService.getEsquema().collection("tareas").find()
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

    public buscarTareaPorId(idTarea:string):any{
        return new Promise( async (resolve, reject) => {
            try {
                let tarea = await this.realmService.getEsquema().collection("tareas").findOne( { _id : idTarea } )
                if(!tarea){
                    reject("No hay una tarea con ese id")
                    return
                }
                resolve(tarea)
            } catch(error){
                console.log(error)
                reject(error)
            }
        })
    }

    public modificarTarea(tarea:Tarea):any{        
        return new Promise( async (resolve, reject) => {
            try{
                let rs = await this
                    .realmService
                    .getEsquema()
                    .collection("tareas")
                    .updateOne( { _id : tarea._id }, { $set : tarea })
                resolve(rs)
            } catch(error) {
                console.log(error)
                reject(error)
            }
        })
    }    

    public borrarTarea(tarea:Tarea):any{        
        return new Promise( async (resolve, reject) => {
            try{
                let rs = await this
                    .realmService
                    .getEsquema()
                    .collection("tareas")
                    .deleteOne( { _id : tarea._id })
                console.log("BORRADO!",rs)
                //Podriamos combrobar que de verdad se ha borrado algo
                resolve(rs)
            } catch(error) {
                console.log(error)
                reject(error)
            }
        })
    }    

    //buscarPorId
    //modificar
    //borrar

}