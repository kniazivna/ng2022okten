import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  @Input()
  comment:IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
