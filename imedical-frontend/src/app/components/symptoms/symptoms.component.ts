import { User } from './../../models/user';
import { UserService } from './../../containers/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './../../containers/home/home.service';
import { Symptom } from './../../models/symptom';

import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {
  symptoms: Symptom[];
  loaded = false;
  selectedSymptoms: number[];
  genders: string[] = ['Male', 'Female'];
  selectedGender: string;
  birthYear: string;
  users: User[];
  constructor(
    private homeService: HomeService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      this.homeService.getSymptoms(data).subscribe(symptoms => {
        this.symptoms = symptoms;
        this.loaded = true;
      });
    });
  }

  handleSubmit() {
    this.homeService.setSelectedSymptoms(this.selectedSymptoms);
    this.homeService.setGender(this.selectedGender);
    this.homeService.setBirthYear(this.birthYear);
    this.router.navigate(['/diagnosis']);
  }

  onSelectedOptionsChange() {
    setTimeout(() => {
      this.selectedSymptoms = this.symptoms
        .filter(symptom => {
          return symptom.selected;
        })
        .map(data => data.ID);
    });
  }
}
