import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import {PostsService} from "./post-services/posts.service";
import { PostComponent } from './posts-components/post/post.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import {HttpClientModule} from "@angular/common/http";
import {PostResolver} from "./post-services/resolvers/post.resolver";
import {PostsResolver} from "./post-services/resolvers/posts.resolver";
import {PostGuard} from "./post-services/guards/post.guard";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PostsService,
    PostResolver,
    PostsResolver,
    PostGuard
  ],
})
export class PostsModule { }
