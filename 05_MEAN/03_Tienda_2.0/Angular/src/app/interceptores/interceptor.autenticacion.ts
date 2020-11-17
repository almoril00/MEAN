import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../servicios/session.service';

//Los interceptores son servicios
//Se registran en el módulo (en este caso en AppModule)
//Deben implementar la interfaz HttpInterceptor

//Una interfaz es un contrato que firma una clase en el que se compromete a tener
//una serie de funciones

//La interfaz HttpInterceptor obliga a tener la funcion 'intercept'

@Injectable()
export class InterceptorAutenticacion implements HttpInterceptor{
    
    public constructor(private sessionService:SessionService){
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log("Interceptando una petición AJAX")

        let JWT = this.sessionService.getItem("JWT")
        if(JWT){
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


