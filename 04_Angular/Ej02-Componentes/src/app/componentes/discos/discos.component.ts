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

  public seleccionar(titulo:string):void{
   
    console.log("Seleccionar:"+titulo)

    for(let disco of this.discos){
      if(disco.titulo == titulo){
        //this.disco = disco
        this.disco.titulo = disco.titulo
        this.disco.autor  = disco.autor
        this.disco.year   = disco.year
        this.disco.genero = disco.genero
        break
      }
    }



  }

}
