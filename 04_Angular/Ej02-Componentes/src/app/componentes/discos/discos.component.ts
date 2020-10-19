import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/entidades/disco';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {

  public disco:Disco
  public discos:Disco[] 

  constructor() {
    this.disco = new Disco()
    this.discos = []
  }

  ngOnInit(): void {
  }

  public vaciarFormulario():void{  
    /*
    this.disco.titulo = ""
    this.disco.autor = ""
    this.disco.year = null
    this.disco.genero = ""
    */
    this.disco = new Disco()
  }

  public insertar():void{
    this.discos.push(this.disco)
    this.vaciarFormulario()
  }

}
