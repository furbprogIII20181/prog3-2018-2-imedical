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

  form = new FormGroup({
    user: new FormGroup({
      email: new FormControl('',  [Validators.required, Validators.email]),
      emailConfirm: new FormControl('',  [Validators.required, Validators.email]),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
      username: new FormControl(''),
      fullname: new FormControl(''),
      birthdate: new FormControl('')
    })
  });

  constructor() {}

  ngOnInit() {}

  @Output()
  update: EventEmitter<User> = new EventEmitter();

  getErrorMessage() {
    return 'Valor inválido';
  }

  handleRegister() {
    console.log(this.form.value);
  }
}
