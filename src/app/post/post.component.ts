import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {interPost} from "../app.component"

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() current_post: interPost
  @Output() onRemove = new EventEmitter<any>() //removePost()

  edit_switch:boolean =false
  edit_text:string = ""
  
  editPost() {
  this.current_post.text=this.edit_text
  this.edit_text = ""
  
    }
  removePost() {
    this.onRemove.emit(this.current_post.id)
  }

 
  ngOnInit() {
  }

}
