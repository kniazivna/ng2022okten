import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../interfaces/post.interface";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants";
import {PostsService} from "../../post-services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(//private httpClient:HttpClient
    private postsService:PostsService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {

    //this.httpClient.get<IPost[]>(urls.posts).subscribe(value => this.posts = value)

    this.activatedRoute.data.subscribe(({postsData}) => this.posts = postsData);
  }

}

