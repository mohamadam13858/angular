import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../app.component';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'
  posts: Posts[];

  constructor(private http: HttpClient) { }


  create(post: any) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  get() {
    return this.http.get<Array<Posts>>(this.url)
  }

  update(post: any) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post), {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  delete(post: any) {
    return this.http.delete(this.url + '/' + post.id).pipe(
      catchError((err: any) => {
        if (err.status === 404) {
          return throwError(() => new NotFoundError(err))
        } else {
          return throwError(() => {
            new AppError(err)
          })
        }
      })
    )
  }




}
