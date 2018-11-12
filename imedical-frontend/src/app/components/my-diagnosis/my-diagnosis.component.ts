import { Diagnosis } from './../../models/diagnosis';
import { UserService } from './../../containers/user/user.service';
import { HomeService } from './../../containers/home/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-diagnosis',
  templateUrl: './my-diagnosis.component.html',
  styleUrls: ['./my-diagnosis.component.scss']
})
export class MyDiagnosisComponent implements OnInit {
  users: User[];
  diagnosis: Diagnosis[];
  constructor(
    private homeService: HomeService,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log('a');
    this.homeService
      .getMock()
      .subscribe(diagnosis => (this.diagnosis = diagnosis));
  }
}
