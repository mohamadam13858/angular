import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

 
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


  constructor(private postServece : PostService) {

  }

  ngOnInit(): void {
    this.postServece.get().subscribe({
      next: (res) => {
        this.posts = res

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

    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: 'reza' }), {
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // }).subscribe({
    //   next: (res) => {
    //     console.log(res);

    //   }
    // })




  }


  deletePost(post: any) {
    this.postServece.delete(post).subscribe({
      next: (res) => {

        let index = this.posts.indexOf(post);

        this.posts.splice(index, 1)

      }
    })
  }








}
