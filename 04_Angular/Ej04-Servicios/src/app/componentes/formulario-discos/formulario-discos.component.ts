import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/entidades/disco';
import { DiscosService } from 'src/app/servicios/discos.service';

@Component({
  selector: 'app-formulario-discos',
  templateUrl: './formulario-discos.component.html',
  styleUrls: ['./formulario-discos.component.css']
})
export class FormularioDiscosComponent implements OnInit {

  public disco:Disco = new Disco() //undefined

  constructor(private discosService:DiscosService) { 
    console.log("Constructor de FormularioDiscosComponent")
  }
  
  ngOnInit(): void {
    console.log("ngOnInit de FormularioDiscosComponent")
  }

  public insertar():void{
    this.discosService.insertar(this.disco)
    //navegar
  }

}
