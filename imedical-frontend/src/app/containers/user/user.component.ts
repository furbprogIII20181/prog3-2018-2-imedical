import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  template: '',
})

export class UserComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((data: User[]) => (this.users = data));
  }

  onUpdatePassenger(event: User) {
    this.userService.addUser(event);
  }
}
