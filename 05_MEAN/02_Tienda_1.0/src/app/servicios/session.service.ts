import { Injectable } from '@angular/core';

//Con providedIn:root convertimos a este servicio en global para la aplicacion
@Injectable({ providedIn : 'root' })
export class SessionService {

    //Nuestro SessionService guarda las movidas EN MEMORIA
    private valores:any[] = []

    public constructor(){
        console.log("Creando SessionService")
    }

    public setItemCopia(clave:string, valor:any):void{
        //Guardamos una copia
        let copia = JSON.parse(JSON.stringify(valor))
        Object.setPrototypeOf(copia, valor)
        this.valores[clave] = valor
    }

    public setItem(clave:string, valor:any):void{
        //Guardamos las cosas EN MEMORIA!
        this.valores[clave] = valor
    }

    public getItem(clave:string):any{
        return this.valores[clave]
    }

    public getItemCopia(clave:string):any{
        let objeto = this.valores[clave]
        let copia = JSON.parse(JSON.stringify(objeto))
        Object.setPrototypeOf(copia, objeto)
        return copia
    }

    public removeItem(clave:string):void{
        //Para borrar una entrada en un array asociativo
        delete this.valores[clave]
    }

    public saludar():void{
        console.log("Hola, soy el SessionService!")
    }

    /*
    private deepCopy(obj): any {
        let copy: any;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Fechas
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Arrays
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.deepCopy(obj[i]);
            }
            return copy;
        }

        // Objects
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }



    */

}