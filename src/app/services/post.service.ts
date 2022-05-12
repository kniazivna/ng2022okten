import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PostModel } from "../models";
import { urls } from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PostModel[]>{
    return this.http
      .get<PostModel[]>(urls.posts)
  }

}
