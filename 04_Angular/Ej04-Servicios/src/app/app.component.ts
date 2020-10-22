import { Component } from '@angular/core';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { DiscosService } from './servicios/discos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
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