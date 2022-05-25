import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form:FormGroup;

  constructor() {
    this._createForm()
  }

  ngOnInit(): void {
  }

  //ініціалізація форми, створення полів
  _createForm():void {

    this.form = new FormGroup({
                                 //що вказано в інпуті
      userName: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null)
    })
  }

}
