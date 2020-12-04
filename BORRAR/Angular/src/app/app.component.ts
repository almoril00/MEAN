//npm install mongodb-stitch-browser-sdk


import { Component } from '@angular/core';

import { Stitch, RemoteMongoClient, AnonymousCredential} from 'mongodb-stitch-browser-sdk'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(){


    const client = Stitch.initializeDefaultAppClient('ejemplo1-ejiie');
    let db = client.getServiceClient(RemoteMongoClient.factory, 
                                 'mongodb-atlas')
                                 .db('esquema');

    client
        .auth
        .loginWithCredential(new AnonymousCredential())
        .then( () => console.log("Autenticado"))
        .catch( error => console.log(error));  

    
  }


}
