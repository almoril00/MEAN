import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { SessionService } from 'src/app/servicios/session.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public mensaje:string
  public estiloLogin:string //ESTO QUE ES????
  public usuario:Usuario

  constructor(private sessionService:SessionService,
              private usuariosService:UsuariosService,
              private router:Router) {
    
    //usr es el usuario que está en la sesión
    let usr = sessionService.getItem("usuario")
    //en vez de unirlo directamente al formulario usaremos una copia

    //la clonación de objetos en js es una mierda pinchada en un palo porque 
    //no es en profundidad
    let usrCopia_1 = Object.create(usr)

    //Podemos serializar el objeto a JSON y luego deserializarlo
    //'clonaria' en profundidad pero se perderían el prototipo y cualquier funcion
    let usrCopia_2 = JSON.parse(JSON.stringify(usr))
    //Si queremos añadirle las funciones le podemos asignar el prototipo del objeto original
    Object.setPrototypeOf(usrCopia_2, usr)

    this.usuario = usrCopia_2

    //Si usamos directamente el sessionService
    this.usuario = sessionService.getItemCopia("usuario")
  }

  ngOnInit() {
  }

  public guardar():void{

    this
      .usuariosService
      .modificarUsuario(this.usuario)
      .subscribe(
        usuarioModificado => {
          //Como todo ha ido bien sustituimos el usuario que está
          //en el sessionService por el nuevo
          //this.sessionService.setItem("usuario", this.usuario)

          //Tambien podemos utilizar el objeto que nos ha devuelto el servicio ReST
          this.sessionService.setItem("usuario", usuarioModificado)
          this.usuario = usuarioModificado
          this.mensaje = ""
        },
        error => { 
          console.log(error) 
          this.mensaje = "Ha fallado algo"
        }
      )

  }

  public baja():void{

    this
      .usuariosService
      .borrarUsuario(this.usuario)
      .subscribe(
        respuesta => {
          //this.sessionService.removeItem("usuario")
          //this.sessionService.removeItem("JWT")
          this.sessionService.vaciar()
          this.router.navigateByUrl("/")
        },
        error => console.log(error)
      )

  }

}



/*

{
  nombre : 'a',
  direccion :  { ciudad : 'b' },
  telefono : 'c'
  saludar : function(){
    console.log("HOLA")
  }
}

{
  "nombre" : "a",
  "direccion" : { "ciudad" : "b"},
  "telefono" : "c"
}


*/

