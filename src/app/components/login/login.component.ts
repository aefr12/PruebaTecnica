import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.usuario)
        .subscribe( resp => {
          this.router.navigateByUrl('/search');
        }, (err) => {
          console.log(err.error.error.message);
        });
  };

}
