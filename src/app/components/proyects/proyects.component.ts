import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{
  pro: Proyecto[] = [];
  constructor(private sProyecto: SProyectoService, private tokenService: TokenService){}
  
  isLogged= false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => {this.pro = data;})
    }

    delete(id?: number) {
      if (id != undefined) {
        this.sProyecto.delete(id).subscribe(
          data => {
            this.cargarProyecto()
          }, err => {
            alert("No se pudo borrar el proyecto");
          })
      }
    }

    /**
     * Detecta URLs en texto y transforma en links HTML.
     */
    transformToLink(text: string): string {
      const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      return text.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
    }
}
