import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { HttpClientModule } from '@Angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    PieComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    //Necesitamos importar este módulo para disponer el objeto HttpClient
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
