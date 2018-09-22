import { EventEmitter } from '@angular/core';
import { User } from './../../../models/user';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {}

  @Output()
  update: EventEmitter<User> = new EventEmitter();

  handleRegister(user: User, valid: boolean) {
    if (valid) {
      this.update.emit(user);
    }
  }
}
