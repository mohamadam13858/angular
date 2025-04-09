import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



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


      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('male'),
      family: new FormArray([])

    })

    this.signupForm.setValue({
      userData: {
        username: "mohamad",
        email: "mh711748@gmail.com"
      },
      gender: "male",
      family: []
    })


    this.signupForm.patchValue({
      userData: {
        email: "mh@gmail.com"
      },
    })









  }



  onSubmit() {
    console.log(this.signupForm);

  }

  reset(){
    this.signupForm.reset()
  }

  get FormArrey1() {
    return (<FormArray>this.signupForm.get('family'))?.controls
  }


  onAddMember() {

    const control = new FormControl(null, Validators.required);

    (<FormArray>this.signupForm.get('family')).push(control)

  }













}
