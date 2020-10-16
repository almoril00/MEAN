
//Este fichero contiene el código que se ejecuta en primer lugar

//Es el único sitio de toda la aplicación Angular en el que hay
//código fuera de una función y fuera de una clase


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Aqui se carga el primer módulo
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
