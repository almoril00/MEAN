import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../entidades/usuario';
import { Observable } from 'rxjs';
import { Configuracion } from '../util/configuracion';


@Injectable( { providedIn : 'root' } )
export class UsuariosService {

    public constructor(private httpClient:HttpClient,
                       private configuracion:Configuracion){
    }

    public registrarUsuario(usuario:Usuario):Observable<any>{
        return this.httpClient.post(this.configuracion.url_servidor+"/usuarios", usuario)
    }

}