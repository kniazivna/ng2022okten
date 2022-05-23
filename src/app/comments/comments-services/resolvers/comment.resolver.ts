import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IComment} from "../../../interfaces/comment.interface";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {
  constructor(private commentsService: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {

    let {id} = route.params;

    return this.commentsService.getById(id);
  }
}

