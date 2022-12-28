import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-arg-plogo',
  templateUrl: './arg-plogo.component.html',
  styleUrls: ['./arg-plogo.component.css']
})
export class ArgPLogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
    login() {
      this.router.navigate(['/login']);
    }
  }
