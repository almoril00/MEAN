import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from './modulos/admin-module/admin.module';
import { UsuariosModule } from './modulos/usuarios-module/usuarios.module';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';
import { MaquetacionLoginComponent } from './modulos/usuarios-module/componentes/maquetacion-login/maquetacion-login.component';
import { MaquetacionAplicacionComponent } from './modulos/admin-module/componentes/maquetacion-aplicacion/maquetacion-aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    AdminModule,
    RouterModule.forRoot(AppModule.rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  public static rutas = [
    {
      path       : '',
      redirectTo : '/usuarios/login',
      pathMatch  : 'full'
    },
    {
      path      : 'usuarios',
      component : MaquetacionLoginComponent,
      //Como dentro de esta componente hay un router-outlet tiene un array de rutas hijas que son para él
      children  : UsuariosModule.rutasMaquetacionLogin
    },
    {
      path      : 'aplicacion',
      component : MaquetacionAplicacionComponent,
      //Como dentro de esta componente hay un router-outlet tiene un array de rutas hijas que son para él
      children  : AdminModule.rutasMaquetacionAplicacion
    }
  ]

}



