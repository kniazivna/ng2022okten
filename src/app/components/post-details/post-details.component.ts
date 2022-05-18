import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  /* constructor(private activatedRoute: ActivatedRoute,
               private postsService: PostsService) {
   }*/

  // constructor(private activatedRoute: ActivatedRoute,
  //             private router: Router) {
  // }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService:PostsService) {
  }

  ngOnInit(): void {
    /* //ddos
     this.activatedRoute.params.subscribe(({id}) => {
       this.postsService.getById(+id).subscribe(value => this.postDetails = value)
     })*/

    /*this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // щоб вказати якого типу мають бути дані
      this.postDetails = data as IPost;
    })*/

    this.activatedRoute.params.subscribe(({id}) => {

      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IPost;

      if(state){
        return this.postDetails = state;
      }

      return this.postService.getById(id).subscribe(value => this.postDetails = value);
    })
  }
}

