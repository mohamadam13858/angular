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

  username: string = ''


  constructor() {
    setTimeout(() => {
      this.isAllowButton = false
    }, 8000)
  }

  click() {
    return this.username = '';
  }


  clickFunctionEvent(event: KeyboardEvent) {
    let value = (event.target as HTMLInputElement).value;

    if (value.length > 0) {
      this.isAllowButton = false
    } else {
      this.isAllowButton = true
    }


  }


}
