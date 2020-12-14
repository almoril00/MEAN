import { Injectable } from '@angular/core';
import { RealmService } from './realm.service';
import { Credentials } from 'realm-web';
import { Usuario } from '../entidades/usuario';

@Injectable( { providedIn : 'root' })
export class AutenticacionService {

    private app:any

    public constructor(private realmService:RealmService){
        this.app = realmService.getApp()
    }

    public logIn(correoE:string, pw:string):any{
        let credenciales = Credentials.emailPassword(correoE, pw)
        //Asincrono
        return this.app.logIn(credenciales)
    }

    public logOut():void{
        //app.currentUser.logout
    }

    public getUser():Usuario {
        let usrRealm = this.app.currentUser;
        let usuario:Usuario = new Usuario(usrRealm._id, 
                                          usrRealm.email, 
                                          null, 
                                          usrRealm.customData.nombre,
                                          usrRealm.customData.direccion,
                                          usrRealm.customData.telefono)
        return usuario
    }

    public registrarUsuario(customerData):void{
        
        /*
        try {

            //Registramos al usuario
            await this.app.emailPasswordAuth.registerUser(correoE, pw)
            
            //Autenticamos al usuario para averiguar que _id le ha correspondido
            let credenciales = Realm.Credentials.emailPassword(correoE, pw)
            let usuario = await this.app.logIn(credenciales)
            console.log(usuario)
        
            //Le añadimos la información extra...
            //Para ello insertamos 'manualmente' la información en la coleccion 'custom_user_data'
            //y nos aseguramos de que la propiedad 'idUsuario' tenga el valor correcto
            customUserData.idUsuario = usuario._id
        
            const coleccion = this.app.services.mongodb("mongodb-atlas").db("agenda_usuarios").collection("custom_user_data");
            let resultado = await coleccion.insertOne(customUserData)
        
              //Refrescamos los datos del usuario puesto que en local storage todavia no tiene la información extra!
              //incluye una petición HTTP al servidor asi que es asíncrona
            usuario = await this.app.currentUser.refreshCustomData()
            console.log("FIN")
            //Aprovechando que el usuario ya está autenticado le mandamos
            //a la agenda
            //window.location= "agenda.html"
        
        } catch (e){
        console.log(e)
        }*/

    }

}