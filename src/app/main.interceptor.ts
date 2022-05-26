import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {Router} from "@angular/router";

import {AuthService} from "./services";
import {IToken} from "./interfaces";


@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthenticated = this.authService.isAuthorization();

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken())
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          //цей варіант використовували, коли не було рефреш токена
          /*this.authService.deleteToken();
          this.router.navigate(['login'])*/

          //тут варіант з refresh токеном
          this.handle401Error(request, next)
        }
return throwError(() => new Error('token invalid or expired'))
      })
    );
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {

    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  handle401Error(request:HttpRequest<any>, next:HttpHandler): any {
this.authService.refresh().pipe(
  switchMap((tokens: IToken) => {
    return next.handle(this.addToken(request, tokens.access))
  } )
)
  }

}
