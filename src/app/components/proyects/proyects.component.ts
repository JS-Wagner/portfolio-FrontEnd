import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{
  misDatos:any;
  constructor(private datos: ServicesService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.misDatos = data;
    });
  }
}
