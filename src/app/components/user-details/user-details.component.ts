import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces/user.interface";
import {UsersService} from "../../services";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;

  // constructor(private activatedRoute: ActivatedRoute,
  //             private usersService: UsersService) {
  //
  // }

  // constructor(private activatedRoute: ActivatedRoute,
  //             private router: Router) {
  //
  // }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UsersService) {

  }

  ngOnInit(): void {
    /*//ddos
        this.activatedRoute.params.subscribe(({id}) => {
          this.usersService.getById(+id).subscribe(value => this.userDetails = value)
        })*/

    //state, use previous data
    // console.log(history.state);

    /* this.activatedRoute.params.subscribe(value => {
       let {state: {data}} = history;
                                // щоб вказати якого типу мають бути дані
       this.userDetails = data as IUser;
     })*/

    //ще такий варіант
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUser;
      console.log(state);
      if (state) {
        return this.userDetails = state;
        }/*else{*/
        return this.userService.getById(id).subscribe(value => this.userDetails = value)
    /*  }*/
      })
    }
  }
