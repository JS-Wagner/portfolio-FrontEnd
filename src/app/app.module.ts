import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './service/services.service';
import { ArgPLogoComponent } from './components/arg-plogo/arg-plogo.component';
import { BannerComponent } from './components/banner/banner.component';
import { interceptorProvider} from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { NewProyectoComponent } from './components/proyects/new-proyecto.component';
import { EditProyectoComponent } from './components/proyects/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
    ArgPLogoComponent,
    BannerComponent,
    NewExperienciaComponent,
    EditExperienceComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ServicesService,
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
