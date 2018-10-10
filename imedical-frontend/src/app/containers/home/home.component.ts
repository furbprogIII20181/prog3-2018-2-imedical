import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
//        <app-user-login [users]="users"></app-user-login>
export class HomeComponent implements OnInit {
  users: User[];
  constructor(private homeService: HomeService) {

  }
  ngOnInit() {

  }


}
