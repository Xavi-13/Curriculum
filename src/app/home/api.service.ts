import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosacademicosI } from './datosacad/datosacademicosI';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // Obtener datos del API
  obtenerDatosAPI(): Observable<datosacademicosI[]> { 
    return this.http.get<datosacademicosI[]>('http://localhost:3001/datosacademicos/consultas');
  }
}
