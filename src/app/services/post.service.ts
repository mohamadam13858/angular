import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../app.component';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { BadInput } from '../errors/badinput-error';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // url: string = 'https://jsonplaceholder.typicode.com/posts'


  constructor( http: HttpClient ) { 

    super('https://jsonplaceholder.typicode.com/posts' , http)
  }







}
