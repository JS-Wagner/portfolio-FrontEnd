import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  misDatos:any;
  constructor(private datos: ServicesService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.misDatos = data;
    });
  }
}
