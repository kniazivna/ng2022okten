import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../interfaces/post.interface";
import {PostsService} from "../../post-services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  constructor(private postsService:PostsService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;

      if(state){
        return this.postDetails = state;
      }

      return this.postsService.getById(id).subscribe(value => this.postDetails = value);

    })
  }

}
