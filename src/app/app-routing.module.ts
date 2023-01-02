import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "src/app/components/login/login.component"
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditProyectoComponent } from './components/proyects/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyects/new-proyecto.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'nuevopro', component: NewProyectoComponent},
    {path: 'editexp/:id', component: EditExperienceComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'editpro/:id', component: EditProyectoComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }