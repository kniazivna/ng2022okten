import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {Observable} from "rxjs";

import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  registration(user:IUser):Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }
}
