import { inject, Injectable } from '@angular/core';
import { Posts } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { AppError } from '../errors/app-error';
import { BadInput } from '../errors/badinput-error';
import { NotFoundError } from '../errors/not-found-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  posts: Posts[];

  constructor( private url : string , private http: HttpClient) { }


  create(res: any) {
    return this.http.post(this.url, JSON.stringify(res)).pipe(
      catchError(this.errorHandler)
    )
  }

  get() {
    return this.http.get<Array<Posts>>(this.url).pipe(
      map((res) => res),
      catchError(this.errorHandler))
  }

  update(res: any) {
    return this.http.put(this.url + '/' + res.id, JSON.stringify(res), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).pipe(
      catchError(this.errorHandler)
    )
  }

  delete(res: any) {
    return this.http.delete(this.url + '/' + res.id).pipe(
      catchError(this.errorHandler)
    )
  }





  private errorHandler(err: any) {
    if (err.status === 400) {
      return throwError(() => new BadInput(err))
    }
    if (err.status === 404) {
      return throwError(() => new NotFoundError(err))
    }
    return throwError(() => {
      new AppError(err)
    })
  }
}
