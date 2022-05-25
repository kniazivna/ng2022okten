import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {IUser} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  usernameError: string;

  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  //ініціалізація форми, створення полів
  _createForm(): void {

    this.form = new FormGroup({
      //що вказано в інпуті
      username: new FormControl(null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      confirmPassword: new FormControl(null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)])
    },
      [this._checkPassword])
  }

  registration(): void {

    const rawValue = this.form.getRawValue();

    delete rawValue.confirmPassword;

    this.authService.registration(rawValue).subscribe(
      () => this.router.navigate(['login']),
      e => this.usernameError = e.error.username[0]
      )
  }

  //null повертає, якщо помилок нема
  _checkPassword(form: AbstractControl): ValidationErrors | null {

    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    return password?.value === confirmPassword?.value ? null: {notSame:true}
  }
}
