import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src copy/app/componentes/usuarios/login/login.component';
import { RegistroComponent } from 'src copy/app/componentes/usuarios/registro/registro.component';
import { MaquetacionLoginComponent } from 'src copy/app/componentes/usuarios/maquetacion-login/maquetacion-login.component';
import { PerfilComponent } from 'src copy/app/componentes/usuarios/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
