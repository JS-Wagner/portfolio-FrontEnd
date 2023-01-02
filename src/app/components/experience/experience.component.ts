import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { Explaboral } from 'src/app/model/explaboral';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  exp: Explaboral[] = [];
  misDatos:any;
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.exp = data;})
    }
  
  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia()
        }, err => {
          alert("No se pudo borrar la experiencia");
        })
    }
  }
}


//ngOnInit(): void {    
  //  this.datos.obtenerDatos().subscribe(data =>{ 
    //  this.misDatos = data;
  //});
//}


