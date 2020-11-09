import { Injectable } from '@angular/core';

//Con providedIn:root convertimos a este servicio en global para la aplicacion
@Injectable({ providedIn : 'root' })
export class SessionService {

    //Nuestro SessionService guarda las movidas EN MEMORIA
    private valores:any[] = []

    public constructor(){
        console.log("Creando SessionService")
    }

    public setItem(clave:string, valor:any):void{
        //Guardamos las cosas EN MEMORIA!
        this.valores[clave] = valor
    }

    public getItem(clave:string):any{
        return this.valores[clave]
    }

    public removeItem(clave:string):void{
        //Pra borrar una entrada en un array asociativo
        delete this.valores[clave]
    }

}