import { Injectable } from '@angular/core';
import { RealmService } from './realm.service';
import { Credentials } from 'realm-web';

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

    public registrarUsuario():void{
        //app.currentUser.logout
    }

}