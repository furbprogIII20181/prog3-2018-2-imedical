import { UserService } from './../user/user.service';
import { HomeService } from './home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { Diagnosis } from './../../models/diagnosis';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private authListenSubs: Subscription;
  authenticated = false;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.authListenSubs = this.userService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.authenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.authListenSubs.unsubscribe();
  }
}
