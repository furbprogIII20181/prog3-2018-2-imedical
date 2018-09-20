import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  template: `
    <div>
        <app-user-login [users]="users"></app-user-login>
        <app-user-register></app-user-register>
    </div>
  `
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((data: User[]) => (this.users = data));
  }
}
