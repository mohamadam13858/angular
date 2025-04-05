import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {


  constructor(private userservice: UserService) {

  }


  ngOnInit(): void {

  }

  getNames() {
    this.userservice.getData()
  }

  addName(name:string){
   this.userservice.setData(name)
  }



}
