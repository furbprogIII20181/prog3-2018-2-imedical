import { EventEmitter } from '@angular/core';
import { User } from './../../../models/user';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  user: User;
  form = new FormGroup({
    user: new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl(''),
      fullname: new FormControl(''),
      birthdate: new FormControl('')
    })
  });
  emailV = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit() {}

  @Output()
  update: EventEmitter<User> = new EventEmitter();

  getErrorMessage() {
    return this.emailV.hasError('required') ? 'You must enter a value' :
        this.emailV.hasError('email') ? 'Not a valid email' :
            '';
  }

  handleRegister() {
    console.log(this.form.value);
  }
}
