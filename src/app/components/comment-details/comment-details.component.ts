import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";
import {CommentsService} from "../../services";


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

  // constructor(private activatedRoute: ActivatedRoute,
  //             private router: Router) {
  // }

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private commentService:CommentsService) {
  }

  ngOnInit(): void {
   /* //ddos
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentsService.getById(+id).subscribe(value => this.commentDetails = value)
    })*/

    /*this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // щоб вказати якого типу мають бути дані
      this.commentDetails = data as IComment;
    })*/

    //варіант з кнопкою
this.activatedRoute.params.subscribe(({id}) => {
  const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IComment;

  if(state){
    return this.commentDetails = state;
  }

  return this.commentService.getById(id).subscribe(value => this.commentDetails = value)

})
  }

}
