import { Injectable } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';

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

  logout() {
  localStorage.removeItem('token');
  }

  public get logIn(): boolean{
  return (localStorage.getItem('token') !== null);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage
    const payload = atob(token.split('.')[1]); // decode payload of token
    const parsedPayload = JSON.parse(payload); // convert payload into an Object

    return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
}

