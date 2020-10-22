import { Injectable } from '@angular/core';
import { Disco } from '../entidades/disco';

@Injectable({ providedIn:'root' })
export class DiscosService {

    private discos:Disco[] = []

    public constructor(){
        console.log("Constructor de DiscosService")
    }

    public insertar(disco:Disco):void{
        disco.id = Math.round(Math.random()*1000000)
        this.discos.push(disco)
    }

    public modificar(disco:Disco):void{
        //
    }

    public borrar(id:number):void{
        //
    }

    public listar(/*criterio de búsqueda*/):Disco[]{
        //Aqui deberíamos devolver una copia del array
        return this.discos
    }

    public buscar(id:Number):Disco{
        for(let d of this.discos){
            if(d.id == id){
                //Deberíamos devolver una copia del disco
                return d
            }
        }
    }

}


