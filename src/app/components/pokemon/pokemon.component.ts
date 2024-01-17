import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pokemon } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  Pokemon?: Pokemon;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllPokemon().subscribe((data) => {
      console.log(data);
      this.Pokemon = data;
    },
      (error) => {
        console.log(error);
      }
    );

    /*
        this.apiService.getAllPokemon().subscribe(
      {
        next: (poke: Pokemon | undefined) => {
          console.log(poke)
          this.pokemon = poke;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
    */


  }

}
