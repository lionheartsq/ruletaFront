import {Component, ViewChild, ElementRef} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent{

  @ViewChild('ruleta') ruleta!:ElementRef;
  @ViewChild('sonido') sonido!:ElementRef;
  giros=0;
  vueltas=3;
  valor:any;
  tema:any;

  constructor() {}

  girar(){
      if(this.giros<this.vueltas){
          let rand=Math.random()*7200;
          this.calcular(rand);
          this.giros++;
          this.sonido.nativeElement.play();
      }
    }

    premio(departamento: string){
      let randP=Math.floor((Math.random() * 7) + 1);
      switch (randP) {
        case 1:
        this.tema="El tema a preguntar es: Clima";
        break;
        case 2:
        this.tema="El tema a preguntar es: Capital";
        break;
        case 3:
        this.tema="El tema a preguntar es: Baile";
        break;
        case 4:
        this.tema="El tema a preguntar es: Hidrografía";
        break;
        case 5:
        this.tema="El tema a preguntar es: Relieve";
        break;
        case 6:
        this.tema="El tema a preguntar es: Comida";
        break;
        case 7:
        this.tema="El tema a preguntar es: Economía";
        break;
      }
      Swal.fire(
        {
          icon: 'warning',
          title: 'Pregunta sobre el departamento de: '+departamento,
          text: 'Para contestar la pregunta primero debe identificar el mapa del departamento',
          footer: this.tema
        });
      console.log("Departamento: "+departamento);
    }

    calcular(rand:number) {

      this.valor = rand / 360;
      this.valor = (this.valor - parseInt(this.valor.toString().split(".")[0]))* 360;
      this.ruleta.nativeElement.style.transform = `rotate(${rand}deg)`;

      console.log("Valor random: "+rand);

      setTimeout(() => {
      switch (true) {
         case this.valor > 0 && this.valor <= 11.25:
         this.premio("AMAZONAS");
         break;
         case this.valor > 11.25 && this.valor <= 22.5:
         this.premio("ANTIOQUIA");
         break;
         case this.valor > 22.5 && this.valor <= 33.75:
         this.premio("ARAUCA");
         break;
         case this.valor > 33.75 && this.valor <= 45:
         this.premio("ATLÁNTICO");
         break;
         case this.valor > 45 && this.valor <= 56.25:
         this.premio("BOLIVAR");
         break;
         case this.valor > 56.25 && this.valor <= 67.5:
         this.premio("BOYACA");
         break;
         case this.valor > 67.5 && this.valor <= 78.75:
         this.premio("CALDAS");
         break;
         case this.valor > 78.75 && this.valor <= 90:
         this.premio("CAQUETA");
         break;
         case this.valor > 90 && this.valor <= 101.25:
         this.premio("CASANARE");
         break;
         case this.valor > 101.25 && this.valor <= 112.5:
         this.premio("CAUCA");
         break;
         case this.valor > 112.5 && this.valor <= 123.75:
         this.premio("CESAR");
         break;
         case this.valor > 123.75 && this.valor <= 135:
         this.premio("CHOCÓ");
         break;
         case this.valor > 135 && this.valor <= 146.25:
         this.premio("CORDOBA");
         break;
         case this.valor > 146.25 && this.valor <= 157.5:
         this.premio("CUNDINAMARCA ");
         break;
         case this.valor > 157.5 && this.valor <= 168.75:
         this.premio("GUAINIA");
         break;
         case this.valor > 168.75 && this.valor <= 180:
         this.premio("GUAJIRA");
         break;
         case this.valor > 180 && this.valor <= 191.25:
         this.premio("GUAVIARE");
         break;
         case this.valor > 191.25 && this.valor <= 202.5:
         this.premio("HUILA");
         break;
         case this.valor > 202.5 && this.valor <= 213.75:
         this.premio("MAGDALENA");
         break;
         case this.valor > 213.75 && this.valor <= 225:
         this.premio("META");
         break;
         case this.valor > 225 && this.valor <= 236.25:
         this.premio("NARIÑO");
         break;
         case this.valor > 236.25 && this.valor <= 247.5:
         this.premio("NORTE DE SANTANDER");
         break;
         case this.valor > 247.5 && this.valor <= 258.75:
         this.premio("PUTUMAYO");
         break;
         case this.valor > 258.75 && this.valor <= 270:
         this.premio("QUINDIO");
         break;
         case this.valor > 270 && this.valor <= 281.25:
         this.premio("RISARALDA");
         break;
         case this.valor > 281.25 && this.valor <= 292.5:
         this.premio("SAN ANDRES Y PROVIDENCIA");
         break;
         case this.valor > 292.5 && this.valor <= 303.75:
         this.premio("SANTANDER");
         break;
         case this.valor > 303.75 && this.valor <= 315:
         this.premio("SUCRE");
         break;
         case this.valor > 315 && this.valor <= 326.25:
         this.premio("TOLIMA");
         break;
         case this.valor > 326.25 && this.valor <= 337.5:
         this.premio("VALLE DEL CAUCA ");
         break;
         case this.valor > 337.5 && this.valor <= 348.75:
         this.premio("VAUPES");
         break;
         case this.valor > 348.75 && this.valor <= 360:
         this.premio("VICHADA");
         break;
       }
       console.log("Valor case: "+this.valor);
     }, 5000);

    }

  }


