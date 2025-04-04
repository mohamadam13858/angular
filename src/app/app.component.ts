import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  numbers:number[] = [1,2,3,4,5] ;


  oddNumbers = [1,3,5];
  evenNumbers = [2,4]


  onlyOdd:boolean = false
}
