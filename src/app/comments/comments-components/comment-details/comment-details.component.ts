import { Component, OnInit } from '@angular/core';
import {IComment} from "../../../interfaces/comment.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentsService} from "../../comments-services/comments.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private commentService:CommentsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IComment;

      if(state){
        return this.commentDetails = state;
      }

      return this.commentService.getById(id).subscribe(value => this.commentDetails = value)

    })
  }

}
