import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Posts {
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


  url: string = 'https://jsonplaceholder.typicode.com/posts'


  posts: Posts[];


  constructor(private http: HttpClient) {
    http.get<Array<Posts>>(this.url).subscribe({
      next: (res) => {
        this.posts = res

      }
    })
  }

  ngOnInit(): void {

  }




  createPost(input: HTMLInputElement) {

    let post: any = { title: input.value }


    this.http.post(this.url, JSON.stringify(post)).subscribe({
      next: (res) => {
        post.id = res
        this.posts.splice(0, 0, post)

      }
    })
  }


  





}
