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

    //borrarUsuario (un usuario solo podrá darse de baja a si mismo)
    //DELETE /usuarios/:id
    
    //modificarUsuario (un usuario solo podrá modificarse a si mismo)

    
    //Solo para los empleados, y los empleados no utilizan esta aplicacion
    //listarUsuarios NO
    //buscarUsuario por id  NO

}