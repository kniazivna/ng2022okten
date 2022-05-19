import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
