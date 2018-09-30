import { EventEmitter } from '@angular/core';
import { User } from './../../../models/user';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidators } from './user.validators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  form = this.fb.group({
    user: this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      emailConfirm: this.fb.control('', [
        Validators.required,
        Validators.email,
        UserValidators.equals
      ]),
      username: this.fb.control('', [Validators.required]),
      fullname: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      passwordConfirm: this.fb.control('', [Validators.required]),
      birthdate: this.fb.control('', [Validators.required]),
      phoneNumber: this.fb.control('', [Validators.required])
    })
  });

  hide = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  @Output()
  update: EventEmitter<User> = new EventEmitter();

  getRequiredMessage(name: string) {
    // #TO DO implement a/an to the NAME
    return `You have to type a ${name}`;
  }

  handleRegister() {
    if (this.form.invalid) {
      console.log('invalido');
      return;
    }

    if (this.form.value.user.email !== this.form.value.user.emailConfirm) {
      console.log('email diff');
      return;
    }

    if (
      this.form.value.user.password !== this.form.value.user.passwordConfirm
    ) {
      console.log('password diff');
      return;
    }
    console.log(this.form.value);
  }
}
