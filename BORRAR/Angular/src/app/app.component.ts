//npm install realm-web
import { Component } from '@angular/core';

import { App, Credentials } from 'realm-web'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(){

    //Obtenemos un objeto que representa a la aplicación que corre en los servidores de MongoDB
    const app = new App({ id: "agenda_usuarios-shouk" });

    let email = "venancia@correo.es"
    let pw    = "1234567890"

    let credenciales = Credentials.emailPassword(email, pw)

    app
        .logIn(credenciales)
        .then( usuario => {
            console.log(usuario)
        })
        .catch( error => {
            console.log(error)
        })    
  }

}
