import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';
import { Configuracion } from '../util/configuracion';

@Injectable( { providedIn : 'root' } )
export class AutenticacionService {

    public constructor(private httpClient:HttpClient,
                       private configuracion:Configuracion){
    }

    public getToken(usuario:Usuario):Observable<any>{
        return this.httpClient.post(this.configuracion.url_servidor+"/login", 
                                    usuario);
    }

}
