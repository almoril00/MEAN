import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../servicios/session.service';
import { LoginComponent } from '../componentes/usuarios/login/login.component';
import { Configuracion } from '../util/configuracion';

//Los interceptores son servicios
//Se registran en el módulo (en este caso en AppModule)
//Deben implementar la interfaz HttpInterceptor

//Una interfaz es un contrato que firma una clase en el que se compromete a tener
//una serie de funciones

//La interfaz HttpInterceptor obliga a tener la funcion 'intercept'

@Injectable()
export class InterceptorAutenticacion implements HttpInterceptor{
    
    public constructor(private sessionService:SessionService,
                       private httpClient:HttpClient,
                       private configuracion:Configuracion){
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log("Interceptando una petición AJAX")

        let JWT = this.sessionService.getItem("JWT")
        if(JWT){

            let hora = Math.floor(Date.now()/1000)
            let horaExpiracion = this.sessionService.getItem("horaExpiracionJWT")
            
            //Si se ha caducado de verdad
            if( hora > ( horaExpiracion  ) ){
                //navegar a login
                //OMG!
                window.location.href = "/"
            }
            
            if( hora > ( horaExpiracion -20  ) ){

                console.log("ESTO VA A CADUCAR EN 20 SEGUNDOS")
                //Solicitamos un nuevo token...
               
               
                console.log("=======================================")
                console.log("AY MAMA")
                let xhr:XMLHttpRequest = new XMLHttpRequest()
                xhr.open("POST", this.configuracion.url_servidor+"/renovarJWT", false ) //SINCRONO, QUE SE JODA EL CHROME 
                xhr.setRequestHeader("Authorization", `Bearer ${JWT}`)
                xhr.send()
                console.log(xhr.status)
                console.log(xhr.responseText)

                //Machacamos el JWT que hay en el sessionService por el nuevo
                JWT = JSON.parse(xhr.responseText).JWT
                this.sessionService.setItem("JWT",JWT)
                //Calculamos el nuevo 
                let cargamento:any = JSON.parse(atob(JWT.split(".")[1]))

                console.log("====================================")
                console.log(cargamento)
                let horaServidor  = cargamento.iat 
                //10:00:00
                let horaExpiracion = cargamento.exp
                //11:00:00
                let horaNavegador = Math.floor(Date.now()/1000)
                //13:00:00
                let diferenciaHora = horaServidor-horaNavegador
                //10800
                let horaExpiracionJWT = horaExpiracion+diferenciaHora
                //14:00:00
      
                this.sessionService.setItem("horaExpiracionJWT", horaExpiracionJWT)                
            }

            //Los objetos request en Angular son inmutables
            //Una vez creado no puede modificarse así que lo que hacemos es un clon
            //y le añadimos o modificamos cosas
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${JWT}`
                }
            })             
        }

        //Si no invocamos 'next' la petición no se enviará
        return next.handle(req)
    }

}


