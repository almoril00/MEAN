import { Component } from '@angular/core';
import { Disco } from './entidades/disco'

//Los componentes son clases TypeScript
//Tienen el decorador @Component
//Las anotaciones sirven para guardar configuracion directamente en el código
//
//-selector    : indicamos cual etiqueta se asociará al componente
//-templateUrl : fichero que contiene la plantilla
//-styleUrls   : un array con unos css que serían específicos para el componente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  //Podemos prescindir del fichero html y colocar en el propio componente la plantilla
  //Esto nos converte de manera automática en unos hijos de puta, por que esto es
  //lo peor que puedes hacer en la vida
  //template: '<div><h1>No se que...</h1>'

  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Un componente Angular tendrá como atributos todos aquellos valores
  //que sean necesarios en la plantilla

  public mensaje:string = "Esta expresión utiliza una variable"
  public numero1:number = 100
  public numero2:number = 300

  //Si no inicializamos el disco dará error al intentar
  //evaluar la expresión {{disco.titulo}}
  public disco:Disco = new Disco()
  public discos:Disco[] = []

  public insertarDisco():void{
    console.log("Insertando el disco")
    
    this.discos.push(this.disco)
    //Creamos un nuevo disco para que se utilice en el formulario
    this.disco = new Disco()    

  }

}
