import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  pokemons: any[] = [];

  constructor( private pokemon: PokeApiService,
               private router: Router ) {
      this.pokemon.getPokemons()
          .subscribe( (data: any) => {
            this.pokemons = Object.values(data);
          });
   }

   verInformacion( nombre: string ){
     this.router.navigate([ '/pokemon', nombre ]);
   }


}
