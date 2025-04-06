import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cmp1',
  standalone: false,
  templateUrl: './cmp1.component.html',
  styleUrl: './cmp1.component.css'
})
export class Cmp1Component implements OnInit {
constructor(private dataService: DataService){
  
}

ngOnInit(): void {
 
  
}


OnBtnClick(){
  this.dataService.useDataEmitterEvent(this.enteredText)
}


enteredText:string = ""




}
