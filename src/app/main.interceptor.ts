import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";

import {AuthService} from "./services";


@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthenticated = this.authService.isAuthorization();

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getToken())
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          this.authService.deleteToken();
          this.router.navigate(['login'])
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

}
