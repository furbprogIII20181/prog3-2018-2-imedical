import { UserService } from './../user/user.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Diagnosis } from './../../models/diagnosis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  diagnosis: Diagnosis[];
  constructor(
    private homeService: HomeService,
    private userService: UserService
  ) {}
  ngOnInit() {
    console.log('a');
    this.homeService.getMock().subscribe(diagnosis => 
      this.diagnosis = diagnosis
    );
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('parapapapapa', this.users);
    });
  }
}
