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


  isAllowButton: boolean = false;

  A: number = 0;

  servers: any[] = []


  constructor() {
  }

  clickFunctionEvent(event: any) {

    return this.isAllowButton = !this.isAllowButton, this.servers.push(new Date().toDateString())
  }



  getclass() {
    if (this.servers.length > 5) {
      return 'mm'
    } else {
      return ''
    }
  }


}
