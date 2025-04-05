import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [
    UserService
  ]
})
export class AppComponent implements OnInit {


  constructor(private userservice : UserService) {

  }


  ngOnInit(): void {

  }


  getData() {
    this.userservice.getJsonFromApi();
  }





}
