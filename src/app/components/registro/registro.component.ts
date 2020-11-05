import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    this.usuario.email = "efras1202@hotmail.com";
  }

  onSubmit(){
    this.auth.nuevoUsuario(this.usuario)
        .subscribe( resp => {
          this.router.navigateByUrl('/home');
        }, (err) => {
          console.log(err.error.error.message);
        });
  }

}
