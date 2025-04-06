import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {


  constructor() {

  }


  ngOnInit(): void {
    this.myObservable.subscribe(
      {
        complete: () => { alert('mmmmmm') },
        next: (val) => { console.log(val) },
        error: (err) => { alert(err.message) }
      }
    )

  }


  myObservable = new Observable((subscribe) => {

    console.log('observable Starts ...');

    setTimeout(() => {
      subscribe.next('1');
    }, 2000);
    setTimeout(() => {
      subscribe.next('2');
    }, 3000);
    setTimeout(() => {
      subscribe.next('3');
    }, 4000);
    setTimeout(() => {
      subscribe.next('4');
    }, 5000);
    setTimeout(() => {
      subscribe.next('5');
    }, 6000);
    setTimeout(() => {
      subscribe.next('6');
    }, 7000);
    setTimeout(() => {
      subscribe.complete();
    }, 7000);


  })


}
