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
      username: new FormControl(''),
      fullname: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
      birthdate: new FormControl(''),
      phoneNumber: new FormControl('')
    })
  });
  hide = true;
  constructor() {}

  ngOnInit() {}

  @Output()
  update: EventEmitter<User> = new EventEmitter();

  getErrorMessage() {
    return 'Valor inválido';
  }

  handleRegister() {
    if (this.form.invalid) {
      console.log('invalido');
      return
    }

    if (this.form.value.user.email !== this.form.value.user.emailConfirm) {
      console.log('email diff');
      return
    }

    if (this.form.value.user.password !== this.form.value.user.passwordConfirm) {
      console.log('password diff');
      return
    }    
    console.log(this.form.value)
  }
}
