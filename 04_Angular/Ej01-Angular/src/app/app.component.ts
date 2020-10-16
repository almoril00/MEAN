import { Component } from '@angular/core';

//Los componentes son clases TypeScript
//Tienen la anotación @Component
//Las anotaciones sirven para guardar configuracion directamente en el código
//
//-selector    : indicamos cual etiqueta se asociará al componente
//-templateUrl : fichero que contiene la plantilla
//-styleUrls   : un array con unos css que serían específicos para el componente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  //Podemos prescindir del fichero html y colocar en el própio componente la plantilla
  //Esto nos converte de manera automática en unos hijos de puta, por que esto es
  //lo peor que puedes hacer en la vida
  //template: '<div><h1>No se que...</h1>'

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ej01-Angular';
}
