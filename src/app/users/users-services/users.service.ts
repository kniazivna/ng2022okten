import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/user.interface";
import {urls} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getById(id:string): Observable<IUser> {
    return this.httpClient
      .get<IUser>(`${urls.users}/${id}`)
  }
}
