import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

   identificador: string;
   nombre: string;
   imagen: string;
   habilidades: [] = [];
   movimientos: [] = [];
   tipos: [] = [];

  constructor( private pokemon: PokeApiService,
               private auth: AuthService,
               private router: Router) { }

  buscar(termino: string){
      this.pokemon.getPokemon( termino )
          .subscribe( (data: any) => {
            console.log(data);
            const { name, id, abilities ,sprites: {other: {dream_world}}, moves, types } = data;
            this.identificador = id;
            this.nombre = name;
            this.imagen = dream_world.front_default;
            this.habilidades = abilities;
            this.movimientos = moves;
            this.tipos = types;
          });
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
