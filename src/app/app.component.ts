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

  isShowServers: boolean = false;

  serverId: number = 1;

  serverStatus: string = "Offline";

  isAllowButton: boolean = true;

  imageurl: string = '';

  username: string = 'mohamad'

  servers: string[] = []


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
  }

  click() {
    return this.username = '';
  }


  createServer(event: any) {
    this.servers.push(this.username)
  }
  clickFunctionEvent(event: any) {

    this.isShowServers = true

  }
  getcolor() {
    return this.serverStatus === 'Online' ? 'green' : 'red'
  }


}
