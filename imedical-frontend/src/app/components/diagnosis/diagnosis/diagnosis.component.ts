import { Diagnosis } from './../../../models/diagnosis';
import { HomeService } from './../../../containers/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosis: Diagnosis[];
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    // this.homeService.ge
  }
}
