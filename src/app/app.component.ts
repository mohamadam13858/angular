import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {

  }



  onSubmit(form: NgForm) {
    console.log(form);
  }










}
