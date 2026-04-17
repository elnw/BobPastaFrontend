import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bobpasto } from '../Models/Bobpasto';

@Injectable({
  providedIn: 'root'
})
export class BobpastoService {
  private apiUrl = import.meta.env.NG_APP_API_URL + '/bobpasta';  // URL de la API cargada desde .env

  constructor(private http: HttpClient) { }

  // Método para obtener todos los registros de Bobpasta
  getBobpasta(): Observable<Bobpasto[]> {
    return this.http.get<Bobpasto[]>(this.apiUrl);
  }

  // Método para crear un nuevo registro de Bobpasta
  createBobpasta(bobpasto: Bobpasto): Observable<Bobpasto> {
    return this.http.post<Bobpasto>(this.apiUrl, bobpasto);
  }
}
