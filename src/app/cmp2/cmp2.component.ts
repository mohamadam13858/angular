import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cmp2',
  standalone: false,
  templateUrl: './cmp2.component.html',
  styleUrl: './cmp2.component.css'
})
export class Cmp2Component implements OnInit {
 constructor(private dataService : DataService) {
  
 }


 ngOnInit(): void {
   this.dataService.dataEmitter.subscribe((value)=>{
     this.title = value
   })
 }


 title:string='mohamad'



}
