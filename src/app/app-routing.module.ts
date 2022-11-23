import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './componentes/acerca-de/edit-acercade.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditFormacionComponent } from './componentes/formacion/edit-formacion.component';
import { NewFormacionComponent } from './componentes/formacion/new-formacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'nuevaexp', component: NewExperienciaComponent },
  { path:'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewFormacionComponent },
  { path: 'editedu/:id', component: EditFormacionComponent },
  { path: 'nuevoproyecto', component: NewProyectoComponent },
  { path: 'editpro/:id', component: EditProyectoComponent },
  { path: 'nuevaskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editacercade/:id', component: EditAcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
