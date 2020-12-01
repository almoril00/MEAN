import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CBProducto } from '../entidades/CBProducto';
import { Configuracion } from '../util/configuracion';

@Injectable( { providedIn : 'root' } )
export class ProductosService {

    public constructor(private httpClient:HttpClient,
                       private configuracion:Configuracion){
    }

    //listarProductos(criterio)
    public listarProductos(criterio:CBProducto):Observable<any>{
        //Una petición GET no puede tener body
        return this.httpClient.get(this.configuracion.url_servidor+"/productos?criterio="+JSON.stringify(criterio))
    }

    //buscarProducto(_id)

}