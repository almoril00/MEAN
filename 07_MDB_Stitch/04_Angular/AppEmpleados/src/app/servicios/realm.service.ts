//npm install realm-web
import { App } from 'realm-web';

import { Injectable } from '@angular/core';

@Injectable( { providedIn : 'root' })
export class RealmService {

    private app:any
    private esquema:any

    public constructor(){
    }

    public getApp():any{
        console.log("GET APP")
        //Inicialización perezosa (lazy init)
        if(!this.app){
            this.app = new App({ id: "app_tareas-kovjm" })
            //this.app = new App({ id: "app-tareas-pruebas-pprli" })
        }
        return this.app
    }

    public getEsquema():any{
        console.log("GET ESQUEMA")
        if(!this.esquema){
            let user = this.getApp().currentUser
            if(!user){
                console.log("Usuario no autenticado al obtener el esquema")
                return
            }
            this.esquema = user.mongoClient("mongodb-atlas").db("esquema_tareas")  
        }
        return this.esquema
    }

}


/*Lo mismo sin florituras:
//
export class RealmService {

    public app:any
    public esquema:any

    public constructor(){
        this.app = new App({ id: "aplicacionfunciones-ejzhy" })
        this.esquema = this.app.services.mongodb("mongodb-atlas").db("esquema_funciones")
    }

}
*/