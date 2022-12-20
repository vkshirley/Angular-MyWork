import { Component } from '@angular/core';
import { Exam } from '../exam';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
  EXAM:Exam[]=[
    {date:'21-12-2022',course:'EmergingTech',timing:'10am'},
    {date:'22-12-2022',course:'cv',timing:'10am'},
    {date:'23-12-2022',course:'project',timing:'10am'},
    
   ]
}
