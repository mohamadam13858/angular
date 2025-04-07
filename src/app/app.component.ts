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


  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {



  }










}
