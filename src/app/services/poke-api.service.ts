import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor( private http: HttpClient ) { 
    console.log('PokeApi Service listo!');
  }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  }

  getPokemon( termino: string ){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${termino}`);
  }

  getInformacion( name: string ){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
