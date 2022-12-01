import { Injectable } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://localhost:4200/api';
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);
      })
  };

  //Para cerrar sesión eliminamos el token del localStorage.
  logout() {
  localStorage.removeItem('token');
  }

  //Verificar si existe la sesión.
  public get logIn(): boolean{
  return (localStorage.getItem('token') !== null);
  }
}