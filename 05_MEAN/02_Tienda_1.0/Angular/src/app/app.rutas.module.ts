import { NgModule } from '@angular/core';

import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';
import { AceptacionTerminosComponent } from './componentes/usuarios/aceptacion-terminos/aceptacion-terminos.component';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';
import { CatalogoComponent } from './componentes/tienda/catalogo/catalogo.component';
import { MaquetacionLoginComponent } from './componentes/usuarios/maquetacion-login/maquetacion-login.component';
import { MaquetacionTiendaComponent } from './componentes/tienda/maquetacion-tienda/maquetacion-tienda.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Estas rutas son para el router-outlet que hay en MaquetacionLogin.html
const rutasMaquetacionLogin = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'registro',
    component : RegistroComponent
  },
  {
    path : 'aceptacion',
    component : AceptacionTerminosComponent
  }
]

//Estas rutas son para el router-outlet que hay en AppComponent.html
const rutas = [
  {
    path      : 'usuarios',
    component : MaquetacionLoginComponent,
    children  : rutasMaquetacionLogin
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: []
})
export class AppRutasModule { }

