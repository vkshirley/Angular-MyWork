import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AcademicsComponent } from './academics/academics.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { EventsComponent } from './events/events.component';
import { ExaminationComponent } from './examination/examination.component';
import { HeaderComponent } from './header/header.component';
import { IQACComponent } from './iqac/iqac.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ResearchComponent } from './research/research.component';
import { StudentlifeComponent } from './studentlife/studentlife.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path:"",redirectTo:'welcome',pathMatch:'full'},
  {path:"welcome",component:WelcomeComponent},

  {path:"programmes",redirectTo:'programmes',pathMatch:'full'},
  {path:"programmes",component:ProgrammesComponent},

  {path:"admissions",redirectTo:'admissions',pathMatch:'full'},
  {path:"admissions",component:AdmissionsComponent},

  {path:"academics",redirectTo:'academics',pathMatch:'full'},
  {path:"academics",component:AcademicsComponent},

  {path:"examination",redirectTo:'examination',pathMatch:'full'},
  {path:"examination",component:ExaminationComponent},

  {path:"research",redirectTo:'research',pathMatch:'full'},
  {path:"research",component:ResearchComponent},

  {path:"events",redirectTo:'events',pathMatch:'full'},
  {path:"events",component:EventsComponent},

  {path:"IQAC",redirectTo:'IQAC',pathMatch:'full'},
  {path:"IQAC",component:IQACComponent},

  {path:"studentlife",redirectTo:'studentlife',pathMatch:'full'},
  {path:"studentlife",component:StudentlifeComponent},

  {path:"aboutus",redirectTo:'aboutus',pathMatch:'full'},
  {path:"aboutus",component:AboutusComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


