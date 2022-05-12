import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models/IPost";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http
      .get<IPost[]>(this.url)
  }

  getPost(id:number): Observable<IPost>{
    return this.http
      .get<IPost>(this.url + "/" + "id")
  }

}
