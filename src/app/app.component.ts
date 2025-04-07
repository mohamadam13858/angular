import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, of } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [
    DataService
  ]
})
export class AppComponent implements OnInit {

  title: string = ''
  constructor(private dataService: DataService) {

  }
  counterSub: any;

  counterOvservable = interval(1000);

  ngOnInit(): void {



  }



  unsubscribe() {
    this.counterSub.unsubscribe()
  }



  subscribe() {
    this.counterSub = this.counterOvservable.subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }








}
