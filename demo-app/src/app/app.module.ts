import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudyComponent } from './study/study.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AcademicsComponent } from './academics/academics.component';
import { ExaminationComponent } from './examination/examination.component';
import { ResearchComponent } from './research/research.component';
import { EventsComponent } from './events/events.component';
import { IQACComponent } from './iqac/iqac.component';
import { StudentlifeComponent } from './studentlife/studentlife.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudyComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ProgrammesComponent,
    AdmissionsComponent,
    AcademicsComponent,
    ExaminationComponent,
    ResearchComponent,
    EventsComponent,
    IQACComponent,
    StudentlifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
