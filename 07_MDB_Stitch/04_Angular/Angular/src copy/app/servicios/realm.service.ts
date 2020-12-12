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
        //Inicialización perezosa (lazy init)
        if(!this.app){
            this.app = new App({ id: "app_tareas-kovjm" })
        }
        return this.app
    }

    public getEsquema():any{
        if(!this.esquema){
            this.esquema = this.getApp().services.mongodb("mongodb-atlas").db("esquema_funciones")
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