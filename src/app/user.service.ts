import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger: LoggerService) { }


  names: string[] = ['mohamad hasemi ']



  getData() {
    console.log(this.names);
    this.logger.logMessage()

  }

  setData(name: string) {
    this.names.push(name)
    this.logger.logMessage()
  }




}
