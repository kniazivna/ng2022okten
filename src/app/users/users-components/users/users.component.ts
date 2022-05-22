import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users-services/users.service";
import {IUser} from "../../../interfaces/user.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private usersService:UsersService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //вже не потрібно, бо отримуємо інформацію через Resolver
   // this.usersService.getAll().subscribe(value => this.users = value);
    this.activatedRoute.data.subscribe(({usersData}) => this.users = usersData);
  }

}
