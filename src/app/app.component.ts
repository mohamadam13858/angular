import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  @ViewChild('F') signeupProperty: NgForm | null = null


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
    console.log(this.signeupProperty);
  }










}
