import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{

  persona: persona = new persona("","","");
  misDatos:any;

  constructor(public personaService: PersonaService, private datos: ServicesService) {}
  ngOnInit(): void{
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    
    this.datos.obtenerDatos().subscribe(data =>{this.misDatos = data;});
  }
}
