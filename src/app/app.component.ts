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


  constructor() {
    setTimeout(() => {
      this.isAllowButton = false
    }, 8000)
  }

  getServerStatus() {
    return this.serverStatus;
  }


  clikFunctionEvent(){
    console.log('click test !');
    
  }


}
