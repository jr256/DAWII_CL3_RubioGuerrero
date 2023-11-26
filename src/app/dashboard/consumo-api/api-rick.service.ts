import { Injectable } from '@angular/core';
import { Rick } from './rick';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRickService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  
  constructor(private http: HttpClient) { }

  listarPersonaje(): Observable<Rick[]>{
    return this.http.get<Rick[]>(this.apiUrl).pipe(
      map(response => response.results.filter(character => character.id % 2 !== 0))
    );
  }
}
