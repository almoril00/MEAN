import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disco } from 'src/app/entidades/disco';
import { DiscosService } from 'src/app/servicios/discos.service';

@Component({
  selector: 'app-formulario-discos',
  templateUrl: './formulario-discos.component.html',
  styleUrls: ['./formulario-discos.component.css'],
  providers: [ ]
})
export class FormularioDiscosComponent implements OnInit {

  public disco:Disco = new Disco() 

  constructor(private discosService:DiscosService,
              private router:Router,
              private ruta:ActivatedRoute) { 

    if(ruta.snapshot.params.idDisco){
      this.disco = discosService.buscar(ruta.snapshot.params.idDisco)
    }

    console.log("Constructor de FormularioDiscosComponent")
  }
  
  ngOnInit(): void {
    console.log("ngOnInit de FormularioDiscosComponent")
  }

  public insertar():void{
    this.discosService.insertar(this.disco)
    this.router.navigate( [ '/listadoDiscos'] )
  }

}
