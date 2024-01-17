import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'https://pokeapi.co/api/v2/pokemon';
  // 'https://pokeapi.co/api/v2/pokemon?limit=151'

  //obtener todos los pokemon
  getAllPokemon(): Observable<Pokemon | undefined >{
    return this.http.get<Pokemon>(this.url + '/1' ).pipe(
      catchError( (error) => {
        console.log(error)
        return of(undefined);
      })
    );

  }
  
}
