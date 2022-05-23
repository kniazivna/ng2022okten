import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentsService} from "./comments-services/comments.service";
import {CommentResolver} from "./comments-services/resolvers/comment.resolver";
import {CommentsResolver} from "./comments-services/resolvers/comments.resolver";
import {CommentsGuard} from "./comments-services/guards/comments.guard";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService,
    CommentResolver,
    CommentsResolver,
    CommentsGuard
  ],
})
export class CommentsModule { }
