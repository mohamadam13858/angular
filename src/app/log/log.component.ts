import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log',
  standalone: false,
  templateUrl: './log.component.html',
  styleUrl: './log.component.css', 
})
export class LogComponent implements OnInit {

constructor(private userservece : UserService){}


  ngOnInit(): void {
    
  }


  getData(){
    this.userservece.getData();
  }
}
