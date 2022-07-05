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

    premio(departamento: string, idDepartamento:number){
      let randP=Math.floor((Math.random() * 7) + 1);
      let randDepartamento=Math.floor((Math.random() * 32) + 1);
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
      var urlImg='\\assets\\'+randDepartamento+'.png';
      Swal.fire({
          title: 'Pregunta sobre el departamento de: '+departamento,
          imageUrl: urlImg,
          imageWidth: 300,
          imageHeight: 300,
          text: 'Para contestar la pregunta primero debe identificar el mapa del departamento. ¿La figura es correcta?',
          footer: this.tema,
          showDenyButton: true,
          confirmButtonText: 'Si',
          denyButtonText: `No`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            if(randDepartamento==idDepartamento){
              Swal.fire('Respuesta correcta', '', 'success')
            }
            else{
              Swal.fire('Respuesta incorrecta', '', 'error')
            }
          } else if (result.isDenied) {
            if(randDepartamento!=idDepartamento){
              Swal.fire('Respuesta correcta', '', 'success')
            }
            else{
              Swal.fire('Respuesta incorrecta', '', 'error')
            }
          }
        })
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
         this.premio("AMAZONAS",1);
         break;
         case this.valor > 11.25 && this.valor <= 22.5:
         this.premio("ANTIOQUIA",2);
         break;
         case this.valor > 22.5 && this.valor <= 33.75:
         this.premio("ARAUCA",3);
         break;
         case this.valor > 33.75 && this.valor <= 45:
         this.premio("ATLÁNTICO",4);
         break;
         case this.valor > 45 && this.valor <= 56.25:
         this.premio("BOLIVAR",5);
         break;
         case this.valor > 56.25 && this.valor <= 67.5:
         this.premio("BOYACA",6);
         break;
         case this.valor > 67.5 && this.valor <= 78.75:
         this.premio("CALDAS",7);
         break;
         case this.valor > 78.75 && this.valor <= 90:
         this.premio("CAQUETA",8);
         break;
         case this.valor > 90 && this.valor <= 101.25:
         this.premio("CASANARE",9);
         break;
         case this.valor > 101.25 && this.valor <= 112.5:
         this.premio("CAUCA",10);
         break;
         case this.valor > 112.5 && this.valor <= 123.75:
         this.premio("CESAR",11);
         break;
         case this.valor > 123.75 && this.valor <= 135:
         this.premio("CHOCÓ",12);
         break;
         case this.valor > 135 && this.valor <= 146.25:
         this.premio("CORDOBA",13);
         break;
         case this.valor > 146.25 && this.valor <= 157.5:
         this.premio("CUNDINAMARCA",14);
         break;
         case this.valor > 157.5 && this.valor <= 168.75:
         this.premio("GUAINIA",15);
         break;
         case this.valor > 168.75 && this.valor <= 180:
         this.premio("GUAJIRA",16);
         break;
         case this.valor > 180 && this.valor <= 191.25:
         this.premio("GUAVIARE",17);
         break;
         case this.valor > 191.25 && this.valor <= 202.5:
         this.premio("HUILA",18);
         break;
         case this.valor > 202.5 && this.valor <= 213.75:
         this.premio("MAGDALENA",19);
         break;
         case this.valor > 213.75 && this.valor <= 225:
         this.premio("META",20);
         break;
         case this.valor > 225 && this.valor <= 236.25:
         this.premio("NARIÑO",21);
         break;
         case this.valor > 236.25 && this.valor <= 247.5:
         this.premio("NORTE DE SANTANDER",22);
         break;
         case this.valor > 247.5 && this.valor <= 258.75:
         this.premio("PUTUMAYO",23);
         break;
         case this.valor > 258.75 && this.valor <= 270:
         this.premio("QUINDIO",24);
         break;
         case this.valor > 270 && this.valor <= 281.25:
         this.premio("RISARALDA",25);
         break;
         case this.valor > 281.25 && this.valor <= 292.5:
         this.premio("SAN ANDRES Y PROVIDENCIA",26);
         break;
         case this.valor > 292.5 && this.valor <= 303.75:
         this.premio("SANTANDER",27);
         break;
         case this.valor > 303.75 && this.valor <= 315:
         this.premio("SUCRE",28);
         break;
         case this.valor > 315 && this.valor <= 326.25:
         this.premio("TOLIMA",29);
         break;
         case this.valor > 326.25 && this.valor <= 337.5:
         this.premio("VALLE DEL CAUCA",30);
         break;
         case this.valor > 337.5 && this.valor <= 348.75:
         this.premio("VAUPES",31);
         break;
         case this.valor > 348.75 && this.valor <= 360:
         this.premio("VICHADA",32);
         break;
       }
       console.log("Valor case: "+this.valor);
     }, 5000);

    }

  }


