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
  selectedOptions: Symptom[];
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      const token = data;
      this.homeService.getSymptoms(token).subscribe(symptoms => {
        this.symptoms = symptoms;
        this.loaded = true;
        console.log(this.symptoms[0].ID, this.symptoms[0].Name);
      });
    });
  }

  handleSubmit() {
    this.homeService.getDiagnosis(this.selectedOptions).subscribe();
  }
}
