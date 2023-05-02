import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams  } from '@angular/common/http';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError, tap, map  } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private endpointValidarUsuario="http://127.0.0.1:8000/jugador/validar?nombreUsuario=";
  private endpointCrearSala="http://127.0.0.1:8000/salas/crear?capacidadSala=";

  constructor(private httpClient: HttpClient) { }

  validarUsuario(id:any): Observable<any> {
    return this.httpClient.get(`${this.endpointValidarUsuario}${id}`);
    }

  crearSala(capacidadSala:any,tipoJuego:any,nPuntaje:any,nTurnos:any,idJugador:any): Observable<any> {
    return this.httpClient.get(`${this.endpointCrearSala}${capacidadSala}&tipoJuego=${tipoJuego}&nPuntaje=${nPuntaje}&nTurnos=${nTurnos}&idJugador=${idJugador}`);
    }

}
