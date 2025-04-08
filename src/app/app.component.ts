import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  @ViewChild('F') signeupForm: NgForm | null = null


  defaultquestion = "pet"

  defaultEmail = "mh711748@gmail.com"

  answer = ''

  genders = [
    'male',
    'female'
  ]

  constructor() {

  }

  ngOnInit(): void {

  }



  onSubmit() {
    console.log(this.signeupForm);
  }

  setValue(){
    this.signeupForm?.setValue({
      gender:"male" ,
      select:"pet" ,
      QuestionAnswer:"rabert deniro" ,
      UserData: {
        username: 'mohamad' , 
        email:'mohamad@gmail.com'
      }

    })
  }
  
  patchValue(){
    this.signeupForm?.form.patchValue({
      UserData: {
        username: 'ali' , 
      }

    })
  }









}
