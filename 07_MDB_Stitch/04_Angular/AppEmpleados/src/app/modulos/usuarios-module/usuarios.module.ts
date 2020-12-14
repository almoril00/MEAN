import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MaquetacionLoginComponent } from './componentes/maquetacion-login/maquetacion-login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MaquetacionLoginComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(UsuariosModule.rutasMaquetacionLogin)
  ],
  exports: [
    LoginComponent,
    RegistroComponent,
    MaquetacionLoginComponent,
    PerfilComponent    
  ]
})
export class UsuariosModule {

  static rutasMaquetacionLogin = [
    {
      path      : 'login',
      component : LoginComponent
    },
    {
      path      : 'registro',
      component : RegistroComponent
    }
  ]


}
