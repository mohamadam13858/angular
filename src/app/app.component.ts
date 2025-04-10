import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { AppError } from './errors/app-error';
import { NotFoundError } from './errors/not-found-error';
import { BadInput } from './errors/badinput-error';
import { AppErrorHandler } from './errors/appErrorHandler';


export interface Posts {
  body: string,
  userId: number,
  title: string,
  id: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {



  posts: Posts[];


  constructor(private postServece: PostService) {

  }

  ngOnInit(): void {
    this.postServece.get().subscribe({
      next: (res) => {
        this.posts = res

      },
      error: (err:any) => {
          if (err instanceof NotFoundError) {
            alert('not found')
          }else throw err
      }


    })
  }




  createPost(input: HTMLInputElement) {

    let post: any = { title: input.value }


    this.postServece.create(post).subscribe({
      next: (res: any) => {
        post.id = res.id
        this.posts = [post, ...this.posts]

      }
      ,
      error: (err: any) => {
        if (err instanceof BadInput) {
          alert('no add post')
        } else {
          throw (err)
        }

      }
    })
  }


  updatePost(post: any) {

    post = {
      id: post.id,
      title: 'mohamad',
      body: 'test',
      userId: post.userId
    }

    this.postServece.update(post).subscribe({
      next: (res: any) => {
        const index = this.posts.findIndex(p => p.id === post.id)

        if (index !== -1) {
          this.posts[index] = res
          console.log(res);

        } else {
          console.log(res);

        }

      }

    })

  }


  deletePost(post: any) {
    this.postServece.delete(post).subscribe({
      next: (res) => {

        let index = this.posts.indexOf(post);

        this.posts.splice(index, 1)

      },
      error: (err: AppError) => {
        if (err instanceof NotFoundError) {
          alert('not found')

        } else {
          throw (err)
        }

      }
    })
  }








}
