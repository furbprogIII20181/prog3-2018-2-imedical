import { UserService } from './../user/user.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  constructor(
    private homeService: HomeService,
    private userService: UserService
  ) {}
  ngOnInit() {
    console.log('a');
    this.homeService.getMock().subscribe(mock => {
      console.log(mock);
    });
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('parapapapapa', this.users);
    });
  }
}
