import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquetacionAplicacionComponent } from './componentes/maquetacion-aplicacion/maquetacion-aplicacion.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from '../usuarios-module/componentes/perfil/perfil.component';
import { TareasAdminComponent } from './componentes/tareas-admin/tareas-admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    TareasAdminComponent,
    MaquetacionAplicacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(AdminModule.rutasMaquetacionAplicacion)
  ],
  exports: [
    MenuComponent,
    TareasAdminComponent,
    MaquetacionAplicacionComponent
  ]
})
export class AdminModule { 

  static rutasMaquetacionAplicacion = [
    {
      path      : 'perfil',
      component : PerfilComponent
    },
    {
      path      : 'tareas',
      component : TareasAdminComponent
    }
  ]


}
