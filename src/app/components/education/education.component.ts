import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educacion: Educacion[] = [];
  
  constructor(private sEducacion: EducacionService, private tokenService: TokenService){}

  isLogged= false;

  ngOnInit(): void {
    this.cargarEducacion();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
  
  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }
  
  delete(id?: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion()
        }, err => {
          alert("No se pudo borrar la educacion");
        })
    }
  }
}
