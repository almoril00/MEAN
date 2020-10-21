import { Component } from '@angular/core';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ej04-Servicios';
}


//ponerle el bustrap
//cabecera.html: ej03
//menu.html: ej03
//pie.html: ej02

//listadoDiscos: ej02 discos component (html y ts)
//formularioDiscos: ej02 discos component (html y ts)

/*
-----------------------------------
|            CABECERA             |
-----------------------------------
|              MENU               |
-----------------------------------
|    |                       |    |             
|    |                       |    |     
|    |   FORMULARIO/LISTADO  |    |                        
|    |                       |    |     
|    |                       |    |     
|    |                       |    |     
|    |                       |    |     
-----------------------------------
|               PIE               |
-----------------------------------
*/