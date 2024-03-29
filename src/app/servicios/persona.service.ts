import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
//URL = 'http://localhost:8080/personas/' ;
//URL = 'http://localhost:8080/' ;
//personaURL = URL + 'personas/' ;

//URL = environment.URL + 'personas/';
//URL = 'https://aprograma.herokuapp.com/personas/';
URL = 'https://portfolio-febt2002.koyeb.app/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`)
  }

  public update(id: number, Persona:persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }
}
