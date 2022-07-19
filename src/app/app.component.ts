import { Component } from '@angular/core';

export interface interPost {
  title:string,
  text:string,
  id?:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr_posts: interPost[]=[
    {title:"Название первого поста", text:"текст первого поста", id:1},
    {title:"Название второго поста", text:"текст второго поста", id:2}
  ]
  addPost(new_post: interPost){
    this.arr_posts.unshift(new_post)
  }

  removePost(id:any){
    this.arr_posts = this.arr_posts.filter(p=>p.id!=id)
  }
}
