import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyCQiM_hATV41W2hXNdXU-uIPFX44L1ULDY';
  userToken: string;

  constructor( private http: HttpClient) {
    this.leerToken();
   }

   logout(){
     localStorage.removeItem('token');
   }

   login( usuario: UsuarioModel ){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
      })
    );
   }

   nuevoUsuario( usuario: UsuarioModel ){
     const authData = {
       ...usuario,
       returnSecureToken: true
     };

     return this.http.post(
       `${this.url}signUp?key=${this.apiKey}`,
       authData
     );
   }

   private guardarToken( idToken: string ){
     this.userToken = idToken;
     localStorage.setItem('token', idToken);
   }

   leerToken(){
     if(localStorage.getItem('token')){
       this.userToken = localStorage.getItem('token');
     }
     else{
       this.userToken = '';
     }

     return this.userToken;
   }

}
