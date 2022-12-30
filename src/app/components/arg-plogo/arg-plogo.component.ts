import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-arg-plogo',
  templateUrl: './arg-plogo.component.html',
  styleUrls: ['./arg-plogo.component.css']
})
export class ArgPLogoComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

    login() {
      this.router.navigate(['/login']);
    }
  }
