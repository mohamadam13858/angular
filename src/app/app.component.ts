import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

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
    // this.myObservable.subscribe(
    //   {
    //     complete: () => { alert('mmmmmm') },
    //     next: (val) => { console.log(val) },
    //     error: (err) => { alert(err.message) }
    //   }
    // )


    this.fromObservable.subscribe({
      next:(val)=>{
        console.log(val);
        
      }, 
      complete: ()=>{
        alert('ffffff')
      }

    })

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


  array1:any = [2,4,6,8]
  array2:any = [3,5,7,9]


  ofObservable = of(this.array1 , this.array2 , 'mohamad')

  fromObservable = from(this.array1)

}
