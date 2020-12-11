import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario
  public mensaje:String = ""

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  public confirmar():void{


  }

}
