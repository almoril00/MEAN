import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public mensaje:string
  public usuario

  constructor(private router:Router) {
    
  }

  ngOnInit() {
  }

  public guardar():void{

  }

  public baja():void{

  }

}

