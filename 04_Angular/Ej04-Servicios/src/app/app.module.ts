import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoDiscosComponent } from './componentes/listado-discos/listado-discos.component';
import { FormularioDiscosComponent } from './componentes/formulario-discos/formulario-discos.component';
import { PieComponent } from './componentes/pie/pie.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { DiscosService } from './servicios/discos.service';

let rutas:Routes = [
  /*{
    path : '',
    component : ListadoDiscosComponent
  },*/
  {
    path : 'listadoDiscos',
    component : ListadoDiscosComponent
  },
  {
    path : 'formularioDiscos',
    component : FormularioDiscosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    ListadoDiscosComponent,
    FormularioDiscosComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  //Los servicios dados de alta a nivel del módulo son globales
  //Se creará una única instacia del servicio y será inyectada allá dónde la pidan
  //DiscosService será un SINGLETON
  //A día de hoy podemos ahorrarnos registrar aqui los servicios singleton si
  //en el servicio colocamos @Injectable({ providedIn:'root' })
  providers: [ /*DiscosService*/ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



