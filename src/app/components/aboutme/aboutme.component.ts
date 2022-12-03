import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
  misDatos:any;
  constructor(private datos: ServicesService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.misDatos = data;
    });
  }
}
