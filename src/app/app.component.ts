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

  isAllowButton: boolean = false;

  A: string = 'ali';

  username: string = 'mohamad'

  servers: string[] = []


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
  }

  click() {
    return this.username = '';
  }


  createServer(event: any) {
    this.servers.push()
  }
  clickFunctionEvent(event: any) {

    return this.isAllowButton ? this.isAllowButton = false : this.isAllowButton = true, this.servers.push(this.A)



  }
  getcolor() {
    return this.serverStatus === 'Online' ? 'green' : 'red'
  }
  getclass(){
    if (this.servers.length > 5) {
      return 'mm'
    }else{
      return ''
    }
  }


}
