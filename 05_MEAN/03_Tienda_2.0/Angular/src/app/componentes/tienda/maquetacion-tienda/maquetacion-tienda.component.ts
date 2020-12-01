import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-maquetacion-tienda',
  templateUrl: './maquetacion-tienda.component.html',
  styleUrls: ['./maquetacion-tienda.component.css']
})
export class MaquetacionTiendaComponent implements OnInit {

  constructor(private sessionService:SessionService,
              private activateRoute:ActivatedRoute,
              private router:Router) {
       
    console.log(activateRoute)

    if(!sessionService.getItem("usuario")){
      router.navigateByUrl("/")
      return
    }
    
  }
  
  ngOnInit(): void {
    this.router.navigate([
      '/tienda',
      {
        outlets : {
          'barra-derecha'   : ['resumenCesta'],
          'barra-izquierda' : ['mostrarBarraIzq']
        }
      }
    ], { skipLocationChange : true  } )   
  }

}


