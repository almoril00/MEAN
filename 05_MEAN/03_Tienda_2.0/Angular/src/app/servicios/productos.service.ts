import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuracion } from '../util/configuracion';

@Injectable( { providedIn : 'root' } )
export class ProductosService {

    public constructor(private httpClient:HttpClient,
                       private configuracion:Configuracion){
    }

    //listarProductos(criterio)
    public listarProductos(/*criterio*/):Observable<any>{
        return this.httpClient.get(this.configuracion.url_servidor+"/productos")
    }

    //buscarProducto(_id)

}