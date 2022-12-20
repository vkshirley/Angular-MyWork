import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent {
    fontColor="blue";
    sayHelloId=19;
    
    changeMyColor(){
      if(this.fontColor==="blue"){
        this.fontColor="red";
      }else{
        this.fontColor="blue";
        // this.disabled="True";
      }

    }

   popUp(){
    alert("no hidden link");
   }

   newW(){
    
   }

   canClick="/welcome"

   STUDENTS:Student[]=[
    {id:1,name:'vaibhav',course:'MCA',email:'vk@somaiya.edu'},
    {id:2,name:'saurabh',course:'MTech',email:'sk@somaiya.edu'},
    {id:3,name:'anish',course:'MA',email:'a@somaiya.edu'},
    {id:4,name:'vardan',course:'Engg',email:'vardan@somaiya.edu'},
    {id:5,name:'gorab',course:'comm',email:'gorab@somaiya.edu'}
   ]


}
