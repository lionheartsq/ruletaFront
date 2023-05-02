import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tipoJuego:String="puntaje";
  valorLimite:number=0;
  nombreUsuario:any;
  capacidadSala:any=2;
  codigoRespuesta: any;
  idJugador: any;
  idTipoJuego: number=0;
  puntaje: number=0;
  turnos: number=0;
  codigoRespuestaSala: any;
  idSala: any;
  identificador: any;

  constructor(public router: Router, private utilsservice:UtilsService) { }

  ngOnInit(): void {
  }

  validarNombre(){
    if(this.nombreUsuario=== undefined || this.nombreUsuario=== ""){
      return false;
    }
    else{
      return true;
    }
  }

  validarLimite(){
    if(this.valorLimite=== undefined || this.valorLimite<1){
      return false;
    }
    else{
      return true;
    }
  }

  completar(){
    console.log("tipoJuego:"+this.tipoJuego);
    console.log("valorLimite:"+this.valorLimite);
    console.log("nombreUsuario:"+this.nombreUsuario);

    if(this.validarLimite()){
      if(this.validarNombre()){
        this.utilsservice.validarUsuario(this.nombreUsuario).subscribe((data)=>{
          this.codigoRespuesta=data.code;
          this.idJugador=data.idJugador;

          if(this.tipoJuego==="puntaje"){
            this.idTipoJuego=1;
            this.puntaje=this.valorLimite;
            this.turnos=9999;
          }else{
            this.idTipoJuego=2;
            this.turnos=this.valorLimite;
            this.puntaje=99999;
          }

          console.log("codigoRespuesta:"+this.codigoRespuesta);

            if(this.codigoRespuesta==="Disponible" || this.codigoRespuesta==="Nuevo"){
              this.utilsservice.crearSala(this.capacidadSala,this.idTipoJuego,this.puntaje,this.turnos,this.idJugador).subscribe((data)=>{
                this.codigoRespuestaSala=data.code;
                this.idSala=data.sala;
                this.identificador=data.identificador;

                console.log("codigoRespuestaSala:"+this.codigoRespuestaSala);
                console.log("idSala:"+this.idSala);
                console.log("identificador:"+this.identificador);

                if(this.codigoRespuestaSala==="Ok"){
                  Swal.fire(
                    {
                      icon: 'success',
                      title: 'Sala disponible',
                      text: 'Sala creada correctamente',
                      footer: 'Puede continuar a la sala'
                    }
                  ).then(() => {
                    // Aquí la alerta se ha cerrado
                    this.router.navigate(['trivia']);
                  });
                }else{
                  Swal.fire(
                    {
                      icon: 'error',
                      title: 'Imposible crear sala',
                      html: 'La sala no ha podido crearse correctamente',
                      footer: 'No se ha podido completar el registro'
                    }
                  )
                }
              }, (err) => {
                  Swal.fire(
                    {
                      icon: 'error',
                      title: 'Imposible crear sala',
                      html: 'La sala no ha podido crearse correctamente',
                      footer: 'No se ha podido completar el registro'
                    }
                  )
                //console.log("codigoRespuestaFalla:"+this.codigoRespuesta);
                //debugger
              });
            }
            else{
              //this.router.navigate(['home']);
              console.log("codigoRespuestaOcupado:"+this.codigoRespuesta);
              Swal.fire(
                {
                  icon: 'error',
                  title: 'Usuario no disponible',
                  html: 'No disponible',
                  footer: 'No se ha podido utilizar el usuario'
                }
              )
            }
          }, (err) => {
              Swal.fire(
                {
                  icon: 'error',
                  title: 'Usuario no disponible',
                  html: 'El nombre de usuario está en uso, por favor elija uno nuevo',
                  footer: 'No se ha podido completar el registro'
                }
              )
            //console.log("codigoRespuestaFalla:"+this.codigoRespuesta);
            //debugger
          });
      }else{
        Swal.fire(
          {
            icon: 'error',
            title: 'Nombre de usuario vacio',
            html: 'Debe proporcionar un nombre de usuario',
            footer: 'No se ha podido crear la sala'
          });
      }
    }else{
      Swal.fire(
        {
          icon: 'error',
          title: 'Valor límite vacio',
          html: 'Debe proporcionar un valor límite',
          footer: 'No se ha podido crear la sala'
        });
    }
  }

  testing(){

  }

}

