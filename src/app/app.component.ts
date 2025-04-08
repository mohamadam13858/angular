import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface IUser {
  username: string,
  email: string,
  QuestionAnswer: string,
  gender: "male" | "female"
}


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

  user = {} as IUser;

  isSubmit:boolean = false


  constructor() {

  }

  ngOnInit(): void {

  }



  onSubmit() {
    this.user!.username = this.signeupForm?.value.UserData.username;
    this.user!.email = this.signeupForm?.value.UserData.email;
    this.user!.QuestionAnswer = this.signeupForm?.value.QuestionAnswer;
    this.user!.gender = this.signeupForm?.value.gender;  
    this.isSubmit = true  
  }

  setValue() {
    this.signeupForm?.setValue({
      gender: "male",
      select: "pet",
      QuestionAnswer: "rabert deniro",
      UserData: {
        username: 'mohamad',
        email: 'mohamad@gmail.com'
      }

    })
  }

  patchValue() {
    this.signeupForm?.form.patchValue({
      UserData: {
        username: 'ali',
      }

    })
  }









}
