import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // async getJsonFromApi() {

  //   let result = await (
  //     await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   ).json();

  //   console.log(result);
  // }

  names: string[] = ['mohamad hasemi ']



  getData() {
    console.log(this.names);

  }

  setData(name: string) {
    this.names.push(name)
  }




}
