import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  serverId: number = 1;
  serverStatus: string = "Offline";

  getServerStatus() {
    return this.serverStatus;
  }

}
