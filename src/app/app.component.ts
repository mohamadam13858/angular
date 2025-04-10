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



  posts: Posts[];


  constructor(private http: HttpClient) {
    http.get<Array<Posts>>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (res) => {
        this.posts = res

      }
    })
  }

  ngOnInit(): void {

  }
}
