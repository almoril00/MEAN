import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-maquetacion-tienda',
  templateUrl: './maquetacion-tienda.component.html',
  styleUrls: ['./maquetacion-tienda.component.css']
})
export class MaquetacionTiendaComponent implements OnInit {

  constructor(private sessionService:SessionService,
              private router:Router) {

    if(!sessionService.getItem("usuario")){
      router.navigateByUrl("/")
    }

  }

  ngOnInit(): void {
  }

}


/*

{ path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }



*/