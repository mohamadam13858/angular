import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  // dataEmitter = new EventEmitter<string>();


  dataEmitter = new Subject<string>()


  useDataEmitterEvent(data: string) {
    this.dataEmitter.next(data)
  }
}
