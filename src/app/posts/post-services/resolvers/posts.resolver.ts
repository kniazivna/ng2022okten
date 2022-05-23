import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPost} from "../../../interfaces/post.interface";
import {PostsService} from "../posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postService:PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {

    return this.postService.getAll();
}
}
