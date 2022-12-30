import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "src/app/components/login/login.component"
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienceComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }