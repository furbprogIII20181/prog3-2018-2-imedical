import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../containers/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

     this.userService.getAllUsersMock().subscribe((data: User[]) => {
      this.users = data;
      this.loading = true;
      this.users = data; 
     });
  }


}