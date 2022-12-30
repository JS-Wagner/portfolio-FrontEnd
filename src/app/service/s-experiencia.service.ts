import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Explaboral } from '../model/explaboral';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'http://localhost:8080/explaboral/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Explaboral[]> {
    return this.httpClient.get<Explaboral[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Explaboral> {
    return this.httpClient.get<Explaboral>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: Explaboral): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experiencia); 
}

  public update(id: number, experiencia: Explaboral): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
