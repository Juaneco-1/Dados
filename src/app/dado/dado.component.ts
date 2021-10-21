import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  @Input() valor!:string;
  imagenDado!:string;
  constructor() {

  }


  ngOnInit(): void {

    this.valor=String(Math.trunc(Math.random()*6)+1);

    this.imagenDado="../assets/"+this.valor+".png";

    //console.log(this.imagenDado="../assets/"+Number(this.valor+".png")

    /* switch(this.valor)
    {
      case 1:
        this.imagenDado="../assets/1.png";
        break;

        case 2:
        this.imagenDado="../assets/2.png";
        break;
        case 3:
        this.imagenDado="../assets/3.png";
        break;

        case 4:
        this.imagenDado="../assets/4.png";
        break;
        case 5:
        this.imagenDado="../assets/5.png";
        break;
        case 6:
        this.imagenDado="../assets/6.png";
        break;
    } */

  }

  tirar(){
    this.valor=String(Math.trunc(Math.random()*6)+1);
    this.imagenDado="../assets/"+this.valor+".png";
  }
  }


