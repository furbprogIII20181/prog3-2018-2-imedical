import { UserService } from './../user/user.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
<<<<<<< HEAD
  selector: 'app-user',
  template: ''
=======
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
>>>>>>> f7d5a3aea6fc5a81e092c56d934a5157bf1ea1ea
})
export class HomeComponent implements OnInit {
  users: User[];
<<<<<<< HEAD
  constructor(
    private homeService: HomeService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('parapapapapa', this.users);
    });
  }
=======
  constructor(private homeService: HomeService) {

  }
  ngOnInit() {}


>>>>>>> f7d5a3aea6fc5a81e092c56d934a5157bf1ea1ea
}
