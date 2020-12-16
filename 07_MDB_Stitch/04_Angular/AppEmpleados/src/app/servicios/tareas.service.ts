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
                    .find( { idUsuario : this.autenticacionService.getUser().idUsuario })
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

}