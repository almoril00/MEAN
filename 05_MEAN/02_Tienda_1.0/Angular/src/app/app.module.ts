import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';
import { AceptacionTerminosComponent } from './componentes/usuarios/aceptacion-terminos/aceptacion-terminos.component';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';
import { CatalogoComponent } from './componentes/tienda/catalogo/catalogo.component';
import { MaquetacionLoginComponent } from './componentes/usuarios/maquetacion-login/maquetacion-login.component';
import { MaquetacionTiendaComponent } from './componentes/tienda/maquetacion-tienda/maquetacion-tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AceptacionTerminosComponent,
    CabeceraComponent,
    PieComponent,
    CatalogoComponent,
    MaquetacionLoginComponent,
    MaquetacionTiendaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
