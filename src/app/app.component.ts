import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private userService : UserService){
      
  }


  ngOnInit(): void {
    
  }


  getData(){
    this.userService.getJsonFromApi();
  }


  
  
}
