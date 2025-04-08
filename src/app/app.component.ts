import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



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



  genders = [
    'male',
    'female'
  ]

  signupForm: FormGroup;




  constructor() {

  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male')
    })
  }


  onSubmit() {
    console.log(this.signupForm);

  }













}
