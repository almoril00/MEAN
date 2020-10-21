
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  //Los componentes son instanciados por Angular. Es decir: nosotros no hacemos el new
  //Los componentes son instanciados cuando aparece su selector en alguna plantilla
  //o hay que colocarlos edn un router-outlet por un cambio en la barra de navegación
  
  //Inyección de dependencias en Angular
  //Si el constructor de un componente (o un servicio) recibe parámetros Angular intentará proporcionarlos
  //Hay una lista concreta de cosas que podemos pedir
  //y si no incamos el tipo angular no sabrá qué pedimos
  //-Router: objeto que sirve para 'navegar'
  //-ActivatedRoute: objeto que representa la ruta que hay ahora mismo en la barra de navegacion
  //-HttpClient: objeto que sirve para enviar peticiones AJAX
  //-Otros componentes presentes en la pagina
  //-Servicios
  //-...

  //private router:Router 
  constructor(private router:Router) {
    //this.router = router
  }

  ngOnInit(): void {
  }

  public navegacionProgramatica():void{
    console.log("Boton pulsado")
    //Lo que haya que hacer aqui...
    //...

    //Para navegar desde el código de un componente necesitamos
    //el objeto 'Router'
    //El objeto router nos lo tienen que dar, no le haremos un 'new'
    //Para que nos lo den lo tenemos que pedir
    //Lo pediremos en el constructor del componente (inyección de dependencias)
    this.router.navigate(["/componente2","555","666"])
  }

}















