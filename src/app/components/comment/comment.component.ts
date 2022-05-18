import {ActivatedRoute, Router} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';

import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:Partial<IComment>;

  constructor( private router:Router,
               private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate([this.comment.id], {
      relativeTo: this.activatedRoute,
    state: {data: this.comment}
    }).then()

  }
}
