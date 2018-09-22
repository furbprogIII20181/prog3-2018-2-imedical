import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  template: `
    <div>

        <app-user-register (update)="onUpdatePassenger($event)"></app-user-register>
        <div *ngFor="let user of Users">{{ user | json }}</div>
    </div>
  `
})
//        <app-user-login [users]="users"></app-user-login>
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
