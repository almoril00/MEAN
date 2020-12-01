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
import { PerfilComponent } from './componentes/usuarios/perfil/perfil.component';
import { CestaComponent } from './componentes/tienda/cesta/cesta.component';
import { ConfirmacionCompraComponent } from './componentes/tienda/confirmacion-compra/confirmacion-compra.component';
import { ResumenCestaComponent } from './componentes/tienda/resumen-cesta/resumen-cesta.component';
import { BarraIzquierdaComponent } from './componentes/tienda/barra-izquierda/barra-izquierda.component';
import { PedidosComponent } from './componentes/tienda/pedidos/pedidos.component';

//Estas rutas son para el router-outlet que hay en MaquetacionLogin.html
const rutasMaquetacionLogin = [
  {
    path      : '',
    component : LoginComponent
  },
  {
    path      : 'registro',
    component : RegistroComponent
  },
  {
    path      : 'aceptacion',
    component : AceptacionTerminosComponent
  }
]

//Estas rutas son para el router-outlet que hay en MaquetacionTienda.html
const rutasMaquetacionTienda = [
  {
    path      : 'catalogo',
    component : CatalogoComponent
  },
  {
    path      : 'perfil',
    component : PerfilComponent
  },
  {
    path      : 'cesta',
    component : CestaComponent
  },
  {
    path      : 'confirmacion',
    component : ConfirmacionCompraComponent
  },
  {
    path      : 'pedidos',
    component : PedidosComponent
  },

  //Rutas para los named router outlets
  //Son rutas aparte
  {
    outlet    : 'barra-derecha',
    path      : 'resumenCesta',
    component : ResumenCestaComponent
  },
  {
    outlet    : 'barra-derecha',
    path      : 'ponquiMonqui',
    component : BarraIzquierdaComponent
  },
  {
    outlet    : 'barra-izquierda',
    path      : 'mostrarBarraIzq',
    component : BarraIzquierdaComponent
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
  },
  {
    path      : 'tienda',
    component : MaquetacionTiendaComponent,
    //Como dentro de esta componente hay un router-outlet tiene un array de rutas hijas que son para él
    children  : rutasMaquetacionTienda
  }
]

@NgModule({
  declarations: [],
  imports: [
    //Estas son las rutas que se asociarán a la primera carpeta de la url
    RouterModule.forRoot(rutas)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: []
})
export class AppRutasModule { }

