import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentComponent} from "./comments-components/comment/comment.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentsResolver} from "./comments-services/resolvers/comments.resolver";
import {CommentsGuard} from "./comments-services/guards/comments.guard";
import {CommentResolver} from "./comments-services/resolvers/comment.resolver";

const routes: Routes = [

  {path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canDeactivate: [CommentsGuard],
    children:[
      {path: ':id', component: CommentDetailsComponent,
      resolve: {commentData: CommentResolver}
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
