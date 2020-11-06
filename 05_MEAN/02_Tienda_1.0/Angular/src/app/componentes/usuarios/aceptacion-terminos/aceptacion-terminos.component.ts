import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceptacion-terminos',
  templateUrl: './aceptacion-terminos.component.html',
  styleUrls: ['./aceptacion-terminos.component.css']
})
export class AceptacionTerminosComponent implements OnInit {


  public acepta:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public registrar(){
    console.log("REGISTRAR")

    //id(this.aceptar)
      //llamar al servicio...(console.log)
    //else
      //mostrar el error

  }

}
