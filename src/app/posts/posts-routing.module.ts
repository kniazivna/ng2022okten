import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {UserGuard} from "../users/users-services/guards/user.guard";
import {PostsResolver} from "./post-services/resolvers/posts.resolver";
import {PostGuard} from "./post-services/guards/post.guard";
import {PostResolver} from "./post-services/resolvers/post.resolver";

const routes: Routes = [
  {path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate: [PostGuard],
    children:[
      {path: ':id', component: PostDetailsComponent,
        resolve: {postData:PostResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
