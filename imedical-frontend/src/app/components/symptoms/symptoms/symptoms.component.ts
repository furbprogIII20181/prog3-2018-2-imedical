import { HomeService } from './../../../containers/home/home.service';
import { Component, OnInit } from '@angular/core';
import { Symptom } from '../../../models/symptom';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  symptoms: Symptom[];
  loaded = false;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      const token = data;
      console.log(token);
      this.homeService.getSymptoms(token).subscribe(symptoms => {
        this.symptoms = symptoms;
        this.loaded = true;
        console.log(this.symptoms[0].ID, this.symptoms[0].Name);
      });
    });
  }
}
