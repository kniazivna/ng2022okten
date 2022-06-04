import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {urls} from "../constants";
import {IToken, IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';

  constructor(private httpClient: HttpClient) {
  }

  registration(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user);
  }

  refresh(): Observable<IToken> {
    const refreshToken = this.getRefreshToken();
    console.log(refreshToken);
    return  this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refreshToken}).pipe(
      tap((tokens:IToken) => {
        this.setToken(tokens)
      })
    )
  }


  setToken(token:IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access);
    localStorage.setItem(this.refreshTokenKey, token.refresh);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  deleteToken():void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }
}
