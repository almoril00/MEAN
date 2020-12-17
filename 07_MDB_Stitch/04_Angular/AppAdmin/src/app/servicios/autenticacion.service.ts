import { Injectable } from '@angular/core';
import { RealmService } from './realm.service';
import { Credentials } from 'realm-web';
import { Usuario } from '../entidades/usuario';

@Injectable( { providedIn : 'root' })
export class AutenticacionService {

    private app:any
    //private esquema:any

    public constructor(private realmService:RealmService){
        this.app = realmService.getApp()
        
        //this.esquema = realmService.getEsquema()
    }

    public logIn(correoE:string, pw:string):any{

        return new Promise( (resolve, reject) => {
            let credenciales = Credentials.emailPassword(correoE, pw)
            //Asincrono
            this.app.logIn(credenciales)
            .then( usrRealm => {
                if(usrRealm.customData.rol != "ADMIN"){
                    reject("Usted no es de aqui")
                    return
                }
                resolve(usrRealm)
            })
            .catch(error => {
                console.log(error)
                reject("Credenciales incorrectas") 
            })
        })

    }

    public logOut():any{

        return new Promise( async (resolve, reject) => {
            
            //Por si acaso hubiera más de un usuario autenticado hacemos
            //logout a todos
            let usuarios = this.app.users
            
            let ok = true
            for(let usr of usuarios){
                try {
                    await usr.logOut()
                } catch (e){
                    console.log(e)
                    ok = false
                }
            }

            if(ok){
                resolve(null)
            } else {
                reject("WTF!")
            }            

            //Si quisieramos que no quedara ni rastro de los usuarios nos basta con
            //limpiar el localStorage con napalm.
            //¡No haría falta ni invocar logOut!
            //localStorage.clear()
        })        
    }


    public getUser():Usuario {
        let usrRealm = this.app.currentUser;
        let usuario:Usuario = new Usuario(usrRealm._id, //idUsuario
                                          usrRealm.email, 
                                          null, 
                                          usrRealm.customData.nombre,
                                          usrRealm.customData.direccion,
                                          usrRealm.customData.telefono)
        return usuario
    }

    public registrarUsuario(usuario:Usuario):any{

        return new Promise(async (resolve, reject) => {

            let customUserData:any = {
                nombre    : usuario.nombre,
                direccion : usuario.direccion,
                telefono  : usuario.telefono
            }
        
            try {
                
                //Registramos al usuario
                await this.app.emailPasswordAuth.registerUser(usuario.correoE, usuario.pw)
                
                //Autenticamos al usuario para averiguar que _id le ha correspondido
                let credenciales = Credentials.emailPassword(usuario.correoE, usuario.pw)
                let usrRealm = await this.app.logIn(credenciales)
                console.log(usrRealm)
            
                //Le añadimos la información extra...
                //Para ello insertamos 'manualmente' la información en la coleccion 'custom_user_data'
                //y nos aseguramos de que la propiedad 'idUsuario' tenga el valor correcto
                customUserData.idUsuario = usrRealm._id
            
                const coleccion = this.realmService.getEsquema().collection("custom_user_data");
                let resultado = await coleccion.insertOne(customUserData)
            
                //Refrescamos los datos del usuario puesto que en local storage todavia no tiene la información extra!
                //incluye una petición HTTP al servidor asi que es asíncrona
                usrRealm = await this.app.currentUser.refreshCustomData()
                console.log("FIN")

                resolve(null)
            
            } catch (e){
                console.log(e)
                reject(e)
            }
        })
    }

    /*Modificar usuario concatenando promesas...
    public modificarUsuario(usuario:Usuario):any{

        return new Promise( (resolve, reject) => {

            let coleccion = this.realmService
                .getEsquema()
                .collection("custom_user_data");   
                
            coleccion
                .updateOne( { idUsuario : usuario.idUsuario }, 
                            { $set : usuario } )
                .then( rs => { 
                    console.log("RS:", rs)
                    //Una vez modificado el custom_user_data actualizamos el usuario en el local storage
                    return this.app.currentUser.refreshCustomData()
                })
                .then( rs => {
                    console.log("Datos del usuario modificados")
                    resolve(null)
                })
                .catch( error => {
                    console.log(error)
                    reject(error)
                })            
            })
    }*/

    //Modificar usuario utilizando AWAIT...
    public modificarUsuario(usuario:Usuario):any{
        return new Promise( async (resolve, reject) => {

            let customUserData:any = {
                nombre    : usuario.nombre,
                direccion : usuario.direccion,
                telefono  : usuario.telefono
            }

            try {
                let coleccion = this.realmService
                    .getEsquema()
                    .collection("custom_user_data");                       
                let rs = await coleccion.updateOne( { idUsuario : usuario.idUsuario }, 
                                                    { $set : customUserData } )
                let usrRealm = await this.app.currentUser.refreshCustomData()
                console.log("Datos del usuario modificados")
                resolve(null)
            } catch(error) {
                console.log(error)
                reject(error)
            }
        })
    }

}