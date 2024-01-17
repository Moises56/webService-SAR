import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'https://pokeapi.co/api/v2/pokemon';
  // 'https://pokeapi.co/api/v2/pokemon?limit=151'

  //obtener todos los pokemon
  getAllPokemon(): Observable<any>{
    return this.http.get( this.url + '/1' );
  }
  
}
