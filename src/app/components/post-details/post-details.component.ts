import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
