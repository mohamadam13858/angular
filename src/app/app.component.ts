import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  isShowServers: boolean= false;

  serverId: number = 1;

  serverStatus: string = "Offline";

  isAllowButton = true;

  imageurl: string = '';

  username: string = ''


  constructor() {
    setTimeout(() => {
      this.isAllowButton = false
    }, 8000)
  }

  click() {
    return this.username = '';
  }


  clickFunctionEvent(event: any) {
   
    this.isShowServers = true

  }


}
