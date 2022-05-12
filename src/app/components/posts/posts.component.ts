import { Component, OnInit } from '@angular/core';

import {PostModel} from "../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {

    this.postService.getAll().subscribe(value => this.posts = value)
  }

}
