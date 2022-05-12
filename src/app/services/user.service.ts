import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { UserModel } from "../models";
import { urls } from "../constants";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(urls.users);
  }
}
