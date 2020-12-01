import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
import { Pedido } from '../entidades/pedido';
import { Configuracion } from '../util/configuracion';
import { SessionService } from './session.service';


@Injectable( { providedIn : 'root' })
export class PedidosService {

    public constructor(private httpClient:HttpClient,
                       private configuracion:Configuracion,
                       private sessionService:SessionService){
    }

    //La tarea de esta función es asegurarse de que en el sessionService exista
    //una cesta a la que se le irán añadiendo los productos
    public crearCesta(){
        //Creamos un pedido
        let cesta = new Pedido()
        //Le añadimos el usuario 
        cesta.usuario = this.sessionService.getItem("usuario")
        //Lo guardamos en el sessionService
        this.sessionService.setItem("cesta", cesta)
        this.sessionService.saludar()
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

    //PUT /pedidos/:id/estados
    //Contetn-type: application/json
    //Authorization: Beared iufiyry9fhyheuifhow4.fmir9fjreigh53w4wp.nffjieiavbreohofg
    //------------------------------
    //{ "estado" : "ACEPTADO" }
    public aceptarPedido(pedido:Pedido){

        return new Promise( (resolve,reject) => {

            let funcion = (pedido, resolve, reject) => {
                this.httpClient.put(this.configuracion.url_servidor+"/pedidos/"+pedido._id+"/estados", {estado : "ACEPTADO"})
                .subscribe(
                    factura => resolve(factura),
                    error => reject(error)
                ) 
            }               

            if(!pedido._id){
                //INSERTAMOS
                this.insertarPedido(pedido)
                .subscribe(
                    pedidoInsertado => {
                        //ACEPTAMOS
                        funcion(pedidoInsertado,resolve,reject)
                    },
                    error => reject(error)
                )
            } else {
                //ACEPTAMOS
                funcion(pedido,resolve,reject)
            }            
        })
    }

    public listarPedidos(idUsuario:string):Observable<any>{
        return this.httpClient.get(this.configuracion.url_servidor+"/pedidos?idUsuario="+idUsuario)
    }

}









