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
  selectedOptions: Symptom[];
  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      const token = data;
      this.homeService.getSymptoms(data).subscribe(symptoms => {
        this.symptoms = symptoms;
        this.loaded = true;
      });
    });
  }

  handleSubmit() {
    this.homeService.setSelectedSymptoms(this.selectedOptions);
    this.router.navigate(['/diagnosis']);
  }
}
