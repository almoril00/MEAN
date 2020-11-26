import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../entidades/pedido';
import { Configuracion } from '../util/configuracion';


@Injectable( { providedIn : 'root' })
export class PedidosService {

    public constructor(private httpClient:HttpClient,
                       private configuracion:Configuracion){
    }

    //POST /pedidos
    //Content-type: application/json
    //Authorization: Bearer fuywggfgfew.ghfjkhgkjshg.hfjkdahfsjkdfh=
    //------------------------------
    //{ le pedido }    
    public insertarPedido(pedido:Pedido):Observable<any>{
        //Nuestro InterceptorAutorización agregará el header authorization
        return this.httpClient.post(this.configuracion.url_servidor+"/pedidos",
                                    pedido
                                    /*Opcional: headers*/)
    }


    //PUT /pedidos/:id
    //Content-type: application/json
    //Authorization: Bearer fuywggfgfew.ghfjkhgkjshg.hfjkdahfsjkdfh=
    //------------------------------
    //{ le pedido }    
    public modificarPedido(pedido:Pedido):Observable<any>{
        //Nuestro InterceptorAutorización agregará el header authorization
        return this.httpClient.put(this.configuracion.url_servidor+"/pedidos/"+pedido._id,
                                   pedido
                                   /*Opcional: headers*/)
    }



}