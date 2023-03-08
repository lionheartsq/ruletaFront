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

  private endpoint="http://certificacion.venko.co:31518/documentomvp/servicio/usuario";

  private endpointFirmantes="http://certificacion.venko.co:31518/documentomvp/servicio/intervinientes";

  private endpointArchivos="http://certificacion.venko.co:31518/documentomvp/servicio/documentos/descargar";

  constructor(private httpClient: HttpClient) { }

  actualizar(key: any) {
    return this.httpClient.put(`${this.endpoint}`, key);
  }

  getData(id:any): Observable<any> {
    return this.httpClient.get(`${this.endpointFirmantes}/${id}`);
    }

  getFile(id: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    //
    return this.httpClient.post(`${this.endpointArchivos}/${id}`,{headers: headers},{responseType: 'text'});
    //    return this.httpClient.post(`${this.endpointArchivos}/${id}`,{headers: headers},{responseType: 'arraybuffer'});
    //    return this.httpClient.post(`${this.endpointArchivos}/${id}`,{headers: headers},{responseType: 'blob'});
  }

}
