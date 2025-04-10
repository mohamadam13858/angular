import { Component, OnInit } from '@angular/core';



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

  appStatus = new Promise((res, rej) => {
    setTimeout(() => {
      res('online')
    }, 2000);
  })

  filterParam: string = ''
  filterParamByTitle: string = ''


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
  onAddProduct() {
    this.products.push({
      name: 'galaxy s23',
      type: "moedum",
      status: "jfjfj",
      started: new Date()
    })
  }
}
