import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";


@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails:IComment;

 /* constructor(private activatedRoute:ActivatedRoute,
              private commentsService:CommentsService) {

  }*/

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
   /* //ddos
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentsService.getById(+id).subscribe(value => this.commentDetails = value)
    })*/

    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // щоб вказати якого типу мають бути дані
      this.commentDetails = data as IComment;
    })
  }

}
