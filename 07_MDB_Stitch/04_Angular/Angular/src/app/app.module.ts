import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/maquetacion/menu/menu.component';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';
import { PerfilComponent } from './componentes/usuarios/perfil/perfil.component';
import { MaquetacionLoginComponent } from './componentes/usuarios/maquetacion-login/maquetacion-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//Estas rutas son para el router-outlet que hay en MaquetacionLogin.html
const rutasMaquetacionLogin = [
  {
    path      : '',
    component : LoginComponent
  },
  {
    path      : 'registro',
    component : RegistroComponent
  }
]

//Estas rutas son para el router-outlet que hay en AppComponent.html
//Son para la primera carpeta de la barra del navegador
const rutas = [
  {
    path      : '',
    component : MaquetacionLoginComponent,
    //Como dentro de esta componente hay un router-outlet tiene un array de rutas hijas que son para él
    children  : rutasMaquetacionLogin
  },
  {
    path      : 'usuarios',
    component : MaquetacionLoginComponent,
    //Como dentro de esta componente hay un router-outlet tiene un array de rutas hijas que son para él
    children  : rutasMaquetacionLogin
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    PieComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    MaquetacionLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
