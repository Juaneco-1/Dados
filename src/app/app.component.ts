import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor1!:number;
  valor3!:number;
  valor2!:number;

  constructor(){
    this.valor1=this.retornarAlea();
    this.valor2=this.retornarAlea();
    this.valor3=this.retornarAlea();
  }

  retornarAlea(){

    return Math.trunc(Math.random()*6)+1;

  }

  /* tirar(){
    this.valor1=this.retornarAlea();
    this.valor2=this.retornarAlea();
    this.valor3=this.retornarAlea();


  } */
}
