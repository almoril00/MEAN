import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //En declarations enumeramos cuantos componentes existen en la aplicacion

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //Tenemos que dar de alta este módulo si queremos
    //utilizar [(ngModel)] y el bidirectional binding
    //import { FormsModule } from '@angular/forms';
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

