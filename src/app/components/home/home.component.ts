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

  codigoRespuesta: any;

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
          console.log("codigoRespuesta:"+this.codigoRespuesta);

            if(this.codigoRespuesta==="Disponible" || this.codigoRespuesta==="Nuevo"){
              Swal.fire(
                {
                  icon: 'success',
                  title: 'Sala disponible',
                  text: 'Sala creada correctamente',
                  footer: data.info
                }
              ).then(() => {
                // Aquí la alerta se ha cerrado
                this.router.navigate(['trivia']);
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

