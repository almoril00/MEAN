import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquetacionAplicacionComponent } from './componentes/maquetacion-aplicacion/maquetacion-aplicacion.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from '../usuarios-module/componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    MaquetacionAplicacionComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(EmpleadosModule.rutasMaquetacionAplicacion)
  ],
  exports: [
    MaquetacionAplicacionComponent,
    MenuComponent
  ]
})
export class EmpleadosModule { 

  static rutasMaquetacionAplicacion = [
    {
      path      : 'perfil',
      component : PerfilComponent
    }
  ]


}
