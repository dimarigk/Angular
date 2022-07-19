import { Component, EventEmitter, OnInit,Output} from '@angular/core';
import {interPost} from "../app.component"

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<interPost>() // addPost ()

  title=""
  text=""
  id=3

  addPost () {
    if(this.text.trim() && this.title.trim()) {
      const new_post: interPost = {
        title: this.title,
        text: this.text,
        id:this.id
      }
      this.id+=1
      this.onAdd.emit(new_post)
      
      this.title=""
      this.text=""
    }

  }

  ngOnInit() {}
}
