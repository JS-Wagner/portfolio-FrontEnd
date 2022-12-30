import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Explaboral } from 'src/app/model/explaboral';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}

  ngOnInit(): void {

  }

  onCreate(): void {
    const exp = new Explaboral(this.nombreE, this.descripcionE);
    this.sExperiencia.save(exp).subscribe(
      data =>{
        alert("Experiencia añadida"); 
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
