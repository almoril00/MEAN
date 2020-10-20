import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
  }

  public navegacionProgramatica():void{
    console.log("Boton pulsado")
    //Lo que haya que hacer aqui...
    //...

    //Para navegar desde el código de un componente necesitamos
    //el objeto 'Router'
    //El objeto router nos lo tienen que dar, no le haremos jamás un 'new'
    //Para que nos lo den lo tenemos que pedir
    //Lo pediremos en el constructor del componente (inyección de dependencias)
    this.router.navigate(["/componente2"])

  }


}
