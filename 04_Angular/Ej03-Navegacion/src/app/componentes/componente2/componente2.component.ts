import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  public dato1:string
  public dato2:string

  //ActivatedRoute es un objeto que representa a lo que hay en la barra de navegacion
  //Esuna de las cosas que podemos solicitar en el constructor de un componente
  constructor(private ruta:ActivatedRoute) { 
    console.log("Componente2: Constructor")

    this.dato1 = ruta.snapshot.params['dato1']
    this.dato1 = ruta.snapshot.params.dato1
    this.dato2 = ruta.snapshot.params.dato2
  }

  ngOnInit(): void {
  }

}
