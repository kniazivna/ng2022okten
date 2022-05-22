import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentComponent} from "./comments-components/comment/comment.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentsComponent} from "./comments-components/comments/comments.component";

const routes: Routes = [

  {path: '', component: CommentsComponent, children:[
      {path: ':id', component: CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
