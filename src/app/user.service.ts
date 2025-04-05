import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger: LoggerService) { }

  // async getJsonFromApi() {

  //   let result = await (
  //     await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   ).json();

  //   console.log(result);
  // }

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
