import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';
import { AceptacionTerminosComponent } from './componentes/usuarios/aceptacion-terminos/aceptacion-terminos.component';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';
import { CatalogoComponent } from './componentes/tienda/catalogo/catalogo.component';
import { MaquetacionLoginComponent } from './componentes/usuarios/maquetacion-login/maquetacion-login.component';
import { MaquetacionTiendaComponent } from './componentes/tienda/maquetacion-tienda/maquetacion-tienda.component';
import { FormsModule } from '@angular/forms';
import { AppRutasModule } from './app.rutas.module';
import { MenuComponent } from './componentes/maquetacion/menu/menu.component';
import { PerfilComponent } from './componentes/usuarios/perfil/perfil.component';
import { InterceptorAutenticacion } from './interceptores/interceptor.autenticacion';

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
    MaquetacionTiendaComponent,
    MenuComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Para el bidirectional binding [(ngModel)]
    HttpClientModule, //Para enviar peticiones ajax con el objeto HttpClient
    AppRutasModule
  ],
  providers: [
    //Los interceptores de httpClient se registran aqui
    //'multi: true' indica que pueden haber más de uno formando una cadena
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAutenticacion, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
