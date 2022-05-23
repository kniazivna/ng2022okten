import { Component, OnInit } from '@angular/core';
import {IComment} from "../../../interfaces/comment.interface";
import {CommentsService} from "../../comments-services/comments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentsService:CommentsService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    //this.commentsService.getAll().subscribe(value => this.comments = value);

    this.activatedRoute.data.subscribe(({commentsData}) => this.comments = commentsData);
  }

}
