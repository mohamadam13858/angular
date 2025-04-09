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


  constructor() {

  }

  ngOnInit(): void {

  }

  products = [
    {
      type: 'meduim',
      name: 'Desktop Computer',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      type: 'large',
      name: 'Gaming Laptop',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      type: 'small',
      name: 'Ultrabook Multimedia',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      type: 'small',
      name: 'SSD Hard disk',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  getStatusClasses(server: { type: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }












}
