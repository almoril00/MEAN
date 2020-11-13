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

    //POST /usuarios
    //Content-type: application/json
    //------------------------------
    //{ usuario }    
    public registrarUsuario(usuario:Usuario):Observable<any>{
        return this.httpClient.post(this.configuracion.url_servidor+"/usuarios", usuario)
    }

    //PUT /usuarios/:id
    //Content-type: application/json
    //------------------------------
    //{ usuario }
    public modificarUsuario(usuario:Usuario):Observable<any>{
        return this.httpClient.put(this.configuracion.url_servidor+"/usuarios/"+usuario._id, usuario)
    }

    //borrarUsuario (un usuario solo podrá darse de baja a si mismo)
    //DELETE /usuarios/:id
    
    //Solo para los empleados, y los empleados no utilizan esta aplicacion
    //listarUsuarios NO
    //buscarUsuario por id  NO

}