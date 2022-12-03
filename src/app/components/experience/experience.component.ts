import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  misDatos:any;
  constructor(private datos: ServicesService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.misDatos = data;
    });
  }
}

