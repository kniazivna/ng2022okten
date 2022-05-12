import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services";
import {UserModel} from "../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: UserModel[];

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {

    this.userService.getAll().subscribe(response => this.users = response);
  }

}
