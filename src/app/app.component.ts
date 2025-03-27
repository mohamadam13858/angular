import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  serverId: number = 1;

  serverStatus: string = "Offline";

  isAllowButton = true;

  imageurl: string = '';

  serverName: string = 'mohamad'


  constructor() {
    setTimeout(() => {
      this.isAllowButton = false
    }, 8000)
  }

  getServerStatus() {
    return this.serverStatus;
  }


  clikFunctionEvent(event: KeyboardEvent) {
    let value = (event.target as HTMLInputElement).value;

    console.log(value);


  }


}
