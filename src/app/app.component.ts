import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  serverId: number = 1;

  serverStatus: string = "Offline";

  isAllowButton = true;

  imageurl: string = ''


  constructor() {
    setTimeout(() => {
      this.isAllowButton = false
    }, 8000)
  }

  getServerStatus() {
    return this.serverStatus;
  }


  clikFunctionEvent(event : KeyboardEvent){
    let value = (event.target as HTMLInputElement).value;

    console.log(value);
    
    
  }


}
