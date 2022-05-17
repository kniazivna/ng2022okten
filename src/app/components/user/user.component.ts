import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input()
  user: Partial<IUser>

  constructor() {
  }

  ngOnInit(): void {
  }

}
