import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../interfaces/user.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UsersService} from "../../users-services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;

  constructor( private usersService:UsersService,
               private activatedRoute:ActivatedRoute,
               private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

      if(state){
        return this.userDetails = state;
      }

        return this.usersService.getById(id).subscribe(value => this.userDetails = value);

    })
  }

}
