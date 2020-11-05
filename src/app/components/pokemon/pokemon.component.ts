import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  nombre: string;
  habilidades: [];
  experiencia: number;
  movimientos: [];
  imagen1: string;
  imagen2: string;
  imagen3: string;

  constructor( private router: ActivatedRoute,
               private pokemon: PokeApiService) { 
    this.router.params.subscribe(params => {
      this.getInformacion(params['name']);
    });
  }

  getInformacion( name: string ){
    this.pokemon.getInformacion(name)
        .subscribe( (informacion: any) => {
          const { name, abilities, base_experience, moves, sprites:{ back_default, front_default, other: { dream_world } } } = informacion;
          this.nombre = name;
          this.habilidades = abilities;
          this.experiencia = base_experience;
          this.movimientos = moves;
          this.imagen1 = dream_world.front_default;
          this.imagen2 = back_default;
          this.imagen3 = front_default;
        });
  }

}
