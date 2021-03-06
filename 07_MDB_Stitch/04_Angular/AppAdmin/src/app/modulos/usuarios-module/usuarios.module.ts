import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MaquetacionLoginComponent } from './componentes/maquetacion-login/maquetacion-login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    LoginComponent,
    PerfilComponent,
    MaquetacionLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(UsuariosModule.rutasMaquetacionLogin)
  ],
  exports: [
    LoginComponent,
    MaquetacionLoginComponent,
    PerfilComponent    
  ]
})
export class UsuariosModule {

  //rutas para el router outlet que hay en MaquetacionLoginComponent
  public static rutasMaquetacionLogin = [
    {
      path      : 'login',
      component : LoginComponent
    }
  ]


}
