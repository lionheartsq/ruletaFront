import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayDocs: any=[];
  numeroDocumento: any;
  codigoRespuesta: any;
  numeroCelular: any;
  email: any;
  fechaExpedicion: any;
  nombre: any;
  tipoDocumento: any;

  constructor(public router: Router, private utilsservice:UtilsService) { }

  ngOnInit(): void {
  }

  redireccion(){
    this.router.navigate(['trivia']);
  }

  completar(){
    this.arrayDocs=[];
    this.utilsservice.getData(this.numeroDocumento).subscribe((data)=>{
    this.codigoRespuesta=data.code;
    this.arrayDocs=data.info;
    this.numeroCelular=this.arrayDocs.celular;
    this.email=this.arrayDocs.correo;
    this.fechaExpedicion=this.arrayDocs.fecha_expedicion;
    this.nombre=this.arrayDocs.nombre;
    this.tipoDocumento=this.arrayDocs.tipo_doc;
    }, (err) => {
      this.arrayDocs=[];
      this.numeroCelular="";
      this.email="";
      this.fechaExpedicion="";
      this.nombre="";
      this.tipoDocumento="";
      //debugger
    });
  }

}

