import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  template: '',
})

export class HomeComponent implements OnInit {
  users: User[];
  constructor(private homeService: HomeService) {

  }
  ngOnInit() {

  }


}
