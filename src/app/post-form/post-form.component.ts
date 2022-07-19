import { Component, EventEmitter, OnInit,Output} from '@angular/core';
import {interPost} from "../app.component"

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<interPost> = new EventEmitter<interPost>() 

  title=""
  text=""
  id=3

  ngOnInit() {}

  addPost () {
    if(this.text.trim() && this.title.trim()) {
      this.id+=1
      const new_post: interPost = {
        title: this.title,
        text: this.text,
        id:this.id
      }

      this.onAdd.emit(new_post)
      

      this.title=""
      this.text=""
    }

  }

}
