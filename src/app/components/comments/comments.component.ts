import { Component, OnInit } from '@angular/core';

import {IComment} from "../../interfaces/comment.interface";
import {CommentsService} from "../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService:CommentsService) { }

  ngOnInit(): void {

    this.commentService.getAll().subscribe(value => this.comments = value)

  }

}
