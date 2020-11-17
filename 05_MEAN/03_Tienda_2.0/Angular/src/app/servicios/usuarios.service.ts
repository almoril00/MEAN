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
    //Authorization: Bearer fuywggfgfew.ghfjkhgkjshg.hfjkdahfsjkdfh=
    //------------------------------
    //{ usuario }
    public modificarUsuario(usuario:Usuario):Observable<any>{        
        //De esto se encarga el IterceptorAutenticacion
        //let opciones = {
        //    headers : {
        //        Authorization : 'Bearer asereje.ja.deje'
        //    }
        //}
        return this.httpClient.put(this.configuracion.url_servidor+"/usuarios/"+usuario._id, usuario /*, opciones*/)
    }
    
    //borrarUsuario (un usuario solo podrá darse de baja a si mismo)
    //DELETE /usuarios/:id
    //Authorization: Bearer fuywggfgfew.ghfjkhgkjshg.hfjkdahfsjkdfh=
    public borrarUsuario(usuario:Usuario):Observable<any>{
        return this.httpClient.delete(this.configuracion.url_servidor+"/usuarios/"+usuario._id)
    }
    
    //Solo para los empleados, y los empleados no utilizan esta aplicacion
    //listarUsuarios NO
    //buscarUsuario por id  NO

}
