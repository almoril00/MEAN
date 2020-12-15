import { Injectable } from "@angular/core";
import { RealmService } from "./realm.service";

@Injectable({ providedIn : 'root' })
export class EmpleadosService {

    public constructor(private realmService:RealmService){
    }

    public listarEmpleados():any{

        return new Promise( async (resolve, reject) => {

            console.log("===========================")
            try{
                let empleados = await this
                    .realmService
                    .getEsquema()
                    .collection("custom_user_data")
                    .find() // { rol : "EMPLEADO" })

                console.log(empleados)

                resolve(empleados)
            } catch (error){
                console.log(error)
                reject(error)
            }

        })

    }

}